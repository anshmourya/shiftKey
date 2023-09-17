import React from "react";

type props = {
  className?: string;
  label: string;
  description?: string;
};
const SectionHeader: React.FC<props> = ({ label, className, description }) => {
  return (
    <div className={`text-center ${className}`} id="sectionHeader">
      <h3 className="capitalize header">{label}</h3>

      <p className="paragraph">
        {description ||
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry&rsquo;s standard dummy text."}
      </p>
    </div>
  );
};

export default SectionHeader;
