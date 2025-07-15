import React, { HTMLProps, FC} from "react";

interface LabelProps{
    labelClassName?: string;
    labelName?: string;
  }

const TextArea: FC<LabelProps & HTMLProps<HTMLTextAreaElement>> = ({ labelClassName, labelName, ...rest }) => {
    return(
        <div className="mb-7.5">
            <label htmlFor="message" className= {labelClassName}>
            {labelName} 
            </label>

            <textarea
            {...rest}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            ></textarea>
        </div>
    )
}
export default TextArea;