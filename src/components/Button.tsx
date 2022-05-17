import React from "react";

export interface Props {
	children?: React.ReactNode;
	onClick: () => void;
    backgroundColour: string;
    width: string;
    height: string;
}

const Button: React.FC<Props> = ({ children, onClick, backgroundColour, width, height }) => {
	return (
		<button onClick={onClick} style={{backgroundColor: backgroundColour || 'blue', width: width, height: height}}>
			{children}
		</button>
	);
};

export default Button;
