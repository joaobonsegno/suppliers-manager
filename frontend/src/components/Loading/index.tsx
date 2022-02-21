import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

type LoadingProps = {
    size?: string;
    color?: string;
    type: 'circular' | 'linear';
    label?: string;
    marginTop?: `${number}rem` | `${number}px`;
    marginBottom?: `${number}rem` | `${number}px`;
}

export function Loading({size='2rem', color='var(--blue)', type, marginTop, marginBottom, label}: LoadingProps): JSX.Element {

    return (
        type === 'circular' ? (
            label ? (
                <> 
                    <h3 style={{
                        fontSize: "1rem", 
                        fontWeight: 400, 
                        color: "var(--darkGray)", 
                        marginBottom: "0.5rem",
                        marginTop: marginTop
                    }}>
                        {label}
                    </h3>
                    <CircularProgress style={{
                        fontSize: size,
                        color: color,
                        marginBottom: marginBottom
                    }}/>
                </>
            ) : (
                <CircularProgress style={{
                    fontSize: size,
                    color: color,
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }}/>
            )
        ) : (
            label ? (
                <> 
                    <h3 style={{
                        fontSize: "1rem", 
                        fontWeight: 400, 
                        color: "var(--darkGray)", 
                        marginBottom: "0.5rem",
                        marginTop: marginTop
                    }}>
                        {label}
                    </h3>
                    <LinearProgress style={{
                        fontSize: size,
                        color: color,
                        marginBottom: marginBottom
                    }}/>
                </>
            ) : (
                <LinearProgress style={{
                    fontSize: size,
                    color: color,
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }}/>
            )
        )
    );
}