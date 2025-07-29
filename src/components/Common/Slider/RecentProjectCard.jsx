const RecentProjectCard = ({ image, title, subTitle }) => {
  return (
    <div className="h-full">
      <div className="sm:w-full max-w-[345px] h-[265px] rounded-[8px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-text-secondary text-base font-lato font-normal leading-7 mt-5">
        {subTitle}
      </h4>
      <h3 className="text-text-primary text-lg font-bold leading-7 mt-2">
        {title}
      </h3>
    </div>
  );
};

export default RecentProjectCard;
