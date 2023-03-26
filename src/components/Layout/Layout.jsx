import React from "react";
import cn from "classnames"
import useTheme from "../../hooks/useTheme";

export const Layout = ({children}) => {
	const {isDark} = useTheme()
	
	return (
		<div className={cn('layout', {
			dark: isDark === true,
		})}>
			<div className="container">
				{children}
			</div>
		</div>
	)
}
