import React from 'react';
import styleTitle from '../components/Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: 'ToDo list',
        }
    }

    /* static defaultProps = {
          numberOfItems: 0
      }
        static propTypes = {
           numberOfItems: React.PropTypes.number.isRequired
       };*/

    render() {
        return (
            <div className={styleTitle.titleContainer}>
                <div className={styleTitle.title}>{this.state.titleName}</div>
                <div className={styleTitle.empty}> - </div>
                <div className={styleTitle.numberOfItems}>{this.props.itemsNumber}</div>
            </div>
        )
    }

}

export default Title;