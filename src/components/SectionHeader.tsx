const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-[1.4vmax]">
      <h1 className="text-secondary whitespace-nowrap font-bold text-[1.5vmax]">
        {title}
      </h1>
      <span className="h-1 w-full bg-red-gradient"></span>
    </div>
  );
};

export default SectionHeader;
