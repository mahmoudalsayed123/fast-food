const MainHeading = ({
  h1,
  h2,
  size,
  description,
}: {
  h1: string;
  h2: string;
  size?: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center sm:items-start sm:w-[70%] ">
      <h1
        className={`text-${size} sm:text-[48px] w-fit mb-[10px] sm:mb-[15px] flex`}
      >
        {h1}{' '}
        <span className="ms-2 text-transparent bg-clip-text bg-linear-to-br from-primary via-primary to-accent">
          {h2}
        </span>
      </h1>
      <p className="text-body text-center sm:text-start text-muted-foreground w-[300px] sm:w-[500px] leading-7 ">
        {description}
      </p>
    </div>
  );
};

export default MainHeading;
