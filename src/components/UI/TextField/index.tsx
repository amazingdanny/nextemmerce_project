
import React, { HTMLProps, FC} from "react";

interface LabelProps{
  labelClassName?: string;
  labelName?: string;
}

const TextField : FC< LabelProps & HTMLProps<HTMLInputElement>> = ({ type, name, id, placeholder, labelClassName, labelName, ...rest }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className={labelClassName}>
        {labelName} <span className="text-red">*</span>
      </label>

      <input
        type= {type}
        name= {name}
        id= {id}
        placeholder={placeholder}
        className= {"rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"}
        {...rest}
      />
    </div>
  
  );
};

export default TextField;