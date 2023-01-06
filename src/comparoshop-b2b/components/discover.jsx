import discoverBg from '../Assets/SVG/Pattern02.svg';
import * as styles from '../utils/tailwind.styles';

const DiscoverSection = () => {
    const discoverSectionStyles = {
        background: `url('${discoverBg}'), ${styles.colors.orange}`,
    }

    return <>
        <div style={discoverSectionStyles} className="h-[250px]">

        </div>
    </>;
}

export default DiscoverSection;