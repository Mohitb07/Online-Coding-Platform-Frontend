import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
class Card extends React.Component {
    render() {
        const {title, description,id} = this.props;
        console.log('card id'+id)
        return(
            <div style={{width: '50%',marginLeft: '-4%',marginTop: '-9%'}}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Title: {title}</h3>
                        <p style={{fontSize:'15px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}} className="card-text">Description: {description}</p>
                        <Button size="small" color="primary">
                            <Link style={{textDecoration:'none'}} to={{
                                pathname:'/problem',
                                questionId:id
                            }}>Solve</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;