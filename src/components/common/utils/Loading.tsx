interface LoadingProps {
  height?: number;
  opacity?: number;
}

export const Loading = ({ height = 5, opacity = 100 }: LoadingProps) => (
  <div className="max-w-sm animate-pulse">
    <div
      className={`h-${height} opacity-${opacity} bg-gray-200 rounded dark:bg-gray-700 w-full`}
    ></div>
  </div>
);
