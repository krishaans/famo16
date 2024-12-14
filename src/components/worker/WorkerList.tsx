import React, { useState, useEffect } from 'react';
import type { Worker } from '../../types/worker';
import WorkerControls from './WorkerControls';
import SessionList from './SessionList';
import { formatTime } from '../../utils/date';
import { calculateEarnings } from '../../utils/calculations';

interface WorkerListProps {
  workers: Worker[];
  onStart: (id: string) => void;
  onPause: (id: string) => void;
  onResume: (id: string) => void;
  onStop: (id: string) => void;
  onAddTip: (workerId: string, sessionId: string, amount: number) => void;
}

const WorkerList: React.FC<WorkerListProps> = ({
  workers,
  onStart,
  onPause,
  onResume,
  onStop,
  onAddTip,
}) => {
  const [time, setTime] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime: Record<string, number> = {};
        workers.forEach((worker) => {
          if (worker.isWorking && !worker.isPaused && worker.currentSessionStart) {
            const start = new Date(worker.currentSessionStart).getTime();
            const pausedDuration = worker.sessions[worker.sessions.length - 1]?.pausedDuration || 0;
            newTime[worker.id] = Date.now() - start - pausedDuration;
          } else {
            newTime[worker.id] = prev[worker.id] || 0;
          }
        });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [workers]);

  return (
    <div className="space-y-4">
      {workers.map((worker) => (
        <div key={worker.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">{worker.username}</h3>
              <p className="text-sm text-gray-500">
                {worker.gender} - {worker.hourlyRate} Rs/hour
              </p>
            </div>
            <div className="text-2xl font-mono">
              {formatTime(time[worker.id] || 0)}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <WorkerControls
              isWorking={worker.isWorking}
              isPaused={worker.isPaused}
              onStart={() => onStart(worker.id)}
              onPause={() => onPause(worker.id)}
              onResume={() => onResume(worker.id)}
              onStop={() => onStop(worker.id)}
            />
            <div className="text-xl font-semibold text-primary">
              Rs. {calculateEarnings(worker.hourlyRate, time[worker.id] || 0).toFixed(2)}
            </div>
          </div>

          <SessionList
            sessions={worker.sessions}
            onAddTip={(sessionId, amount) => onAddTip(worker.id, sessionId, amount)}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkerList;