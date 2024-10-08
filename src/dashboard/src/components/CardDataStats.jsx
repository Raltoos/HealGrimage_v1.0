/* eslint-disable react/prop-types */

const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark z-">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F5F9] mx-5">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="font-abc-whyte font-bold text-black mx-4 mt-2">
            {total}
          </h4>
          <span className="text-sm font-medium ml-3">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium p-4 ${
            levelUp && 'text-green-500'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-green-500"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
