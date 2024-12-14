import React from 'react';
import { DollarSign } from 'lucide-react';
import type { WorkSession } from '../../types/worker';
import { formatDate } from '../../utils/date';

interface SessionListProps {
  sessions: WorkSession[];
  onAddTip: (sessionId: string, amount: number) => void;
}

const SessionList: React.FC<SessionListProps> = ({ sessions, onAddTip }) => {
  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="font-semibold mb-2">Previous Sessions</h4>
      <div className="space-y-2">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex justify-between items-center p-2 bg-gray-50 rounded"
          >
            <div className="text-sm">
              <div>
                {formatDate(session.startTime)} -{' '}
                {session.endTime && new Date(session.endTime).toLocaleTimeString()}
              </div>
              <div className="text-gray-500">
                Earnings: Rs. {session.totalEarnings.toFixed(2)}
                {session.tip && ` (+ Rs. ${session.tip} tip)`}
              </div>
            </div>
            {!session.tip && (
              <button
                onClick={() => {
                  const amount = parseFloat(prompt('Enter tip amount:') || '0');
                  if (amount > 0) {
                    onAddTip(session.id, amount);
                  }
                }}
                className="text-primary hover:text-secondary"
              >
                <DollarSign size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionList;