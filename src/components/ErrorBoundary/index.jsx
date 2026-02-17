import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    margin: '20px',
                    backgroundColor: '#fee',
                    border: '2px solid #c33',
                    borderRadius: '8px',
                    fontFamily: 'monospace'
                }}>
                    <h1 style={{ color: '#c33' }}>Something went wrong</h1>
                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
                            Click for error details
                        </summary>
                        <p><strong>Error:</strong> {this.state.error && this.state.error.toString()}</p>
                        <p><strong>Stack trace:</strong></p>
                        <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
