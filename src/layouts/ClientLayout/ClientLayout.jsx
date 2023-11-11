
import './ClientLayout.scss';

export const ClientLayout = (props) => {
    const {children} = props;
    return (
        <>
            <h1>ClientLayout</h1>

            {children}
        </>
    );
}
