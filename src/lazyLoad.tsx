//inspired by Lyft's universal lazy load
import * as React from "react";

interface ILazyLoadProps {
    delay?: number;
    load: () => Promise<any>;
    loading?: any;
}

interface ILazyLoadState {
    isLoading: boolean;
    isDelayPass: boolean;
    child: any;
}

export function lazyLoad<P>(opts: ILazyLoadProps) {

    const options = Object.assign({ delay: 200, loading: <div>Loading...</div> }, opts);

    return class LazyLoadComponent extends React.Component<P, ILazyLoadState> {

        constructor(props: P) {
            super(props);
            this.state = {
                isLoading: true,
                isDelayPass: true,
                child: null
            }
        }

        componentWillMount() {
            const timeout = setTimeout(() => {
                this.setState({ isDelayPass: true });
            }, options.delay)

            const result = options.load();

            result.then(x => {
                clearTimeout(timeout);
                this.setState({ isLoading: false, child: x["default"] });
            });
        }

        render() {
            if (this.state.isLoading && !this.state.isDelayPass)
                return null;

            if (this.state.isLoading && this.state.isDelayPass)
                return options.loading;
            if (this.state.child !== null)
                return <this.state.child {...this.props} />;

            return null;
        }
    }
}

