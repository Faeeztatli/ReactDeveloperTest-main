import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { SponsorsProps } from "./Sponsors";
import { media } from 'styles/mixins';
import { colours, fontSizes, fonts } from 'styles/variables';

export type SponsorsClassNames = "sponsors";
export type SponsorsClasses = Classes<SponsorsClassNames>;
export type SponsorsStyles = Styles<SponsorsClassNames>;
export type SponsorsStylesProps = SponsorsProps;
const getStyles: SponsorsStyles = {
    sponsors:({ComponentStyle} : SponsorsStylesProps) => ({
        maxWidth: ComponentStyle?.containermaxwidth != null ? ComponentStyle?.containermaxwidth : "1024 px"        
     }) 

};

const useSponsorsStyles: (data?: any) => SponsorsClasses = createUseStyles<SponsorsClassNames>(getStyles);
export default useSponsorsStyles;