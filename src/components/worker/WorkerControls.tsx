import React from 'react';
import { Play, Pause, Square } from 'lucide-react';

interface WorkerControlsProps {
  isWorking: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

const WorkerControls: React.FC<WorkerControlsProps> = ({
  isWorking,
  isPaused,
  onStart,
  onPause,
  onResume,
  onStop,
}) => {
  return (
    <div className="space-x-2">
      {!isWorking ? (
        <button
          onClick={onStart}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        >
          <Play size={20} />
        </button>
      ) : (
        <>
          {isPaused ? (
            <button
              onClick={onResume}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <Play size={20} />
            </button>
          ) : (
            <button
              onClick={onPause}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
            >
              <Pause size={20} />
            </button>
          )}
          <button
            onClick={onStop}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
          >
            <Square size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default WorkerControls;