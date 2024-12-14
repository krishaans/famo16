export const calculateEarnings = (hourlyRate: number, duration: number) => {
  const hours = duration / (1000 * 60 * 60);
  return hours * hourlyRate;
};

export const calculatePausedDuration = (
  startTime: string,
  endTime: string,
  pausedDurations: number[] = []
) => {
  const totalDuration = new Date(endTime).getTime() - new Date(startTime).getTime();
  const totalPausedDuration = pausedDurations.reduce((sum, duration) => sum + duration, 0);
  return totalDuration - totalPausedDuration;
};