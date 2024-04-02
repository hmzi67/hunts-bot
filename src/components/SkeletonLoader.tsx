const SkeletonLoader = () => (
  <div className="message">
    <div className="w-full max-w-3xl mx-auto">
    <div className="bg-gray-200 rounded-lg p-4 animate-pulse">
      <div className="flex space-x-4 items-center">
        <div className="bg-gray-300 h-4 w-24 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 w-20 rounded animate-pulse"></div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
</div>
);

export default SkeletonLoader;
