import React from "react";
import '../components.css';

interface Props {
    props?: any
}

interface State {
    is_visible: boolean
}


class ScrollToTop extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 350) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <img alt='scroll' className='scrollTopArrow' src={require('../assets/next.png')} />
                    </div>
                )}
            </div>
        );

    }
}

export default ScrollToTop
