// import React from 'react';


type ProjectProps = {
  title: string;
  // subtitle: string;
  // description: string;
  // img: string;
  // technologies: Array<string>;
}

const Project = ({ title, subtitle, description, img, technologies }: ProjectProps) => {
  return (
    <div>
      <div className="box-border h-40 bg-[url(/img/print-minutos.jpg)] bg-cover m-6">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Project;