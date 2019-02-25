import React, {Component}  from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class CollapseRadio extends Component {
    state = {
        open: false,
        value: 0
    }
    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open: this.props.initState
            
            })
        }
    }
    handleClick = () => {
        this.setState({open: !this.state.open})
    }
    handleAngle = () => (
            this.state.open ? 
            <FontAwesomeIcon 
                icon={faAngleUp} 
                className="icon"/>
            :
            <FontAwesomeIcon 
                icon={faAngleDown} 
                className="icon"/>
    )
    handleChange = () => (
        
    )
    
    renderList = () => {

    }
    render(){
        return (
            <div>
                <List style={{ borderBottom: '1px solid #dbdbdb '}}>
                    <ListItem onClick={this.handleClick} >
                        <ListItemText 
                            primary={this.props.title}
                            className="collapse_title"
                        />
                        {this.handleAngle()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <RadioGroup
                                arial-label="prices"
                                name="price"
                                vaalue={this.state.value}
                                onChange={this.handleChange}>
                                    {this.renderList()}
                            </RadioGroup>

                        </List>
                    </Collapse>
                </List>

            </div>
        )
    }
}
export default CollapseRadio;