import * as styles from '../utils/tailwind.styles';

const TestemoniesSection = () => {
    const testemoniesStyles = {
        leftCard: {
            backgroundColor: `${styles.colors.blue}`,
        },
        rightCard: {
            backgroundColor: `${styles.colors.orangeLight}`,
        }

    }

    return <>
        <div className="h-[600px] flex">
            <div style={testemoniesStyles.leftCard} className={`pl-${styles.defaultPadding} w-[400px]`}>
                left
            </div>

            <div style={testemoniesStyles.rightCard} className={`pr-${styles.defaultPadding} flex-grow`}>
                right
            </div>
        </div>
    </>;
}

export default TestemoniesSection;