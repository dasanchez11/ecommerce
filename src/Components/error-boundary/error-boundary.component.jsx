import React from 'react';

class ErrorBoundary extends React.component{
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }


    static getDerivedStateFromError(error){
        // process the error
        
        return {hasErrored: true}
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render(){
        if(this.state.hasErrored ) {
            return <div>Something Went Wrong</div>
        }

        return this.props.children
    }
}

export default ErrorBoundary; 