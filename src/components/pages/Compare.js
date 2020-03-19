import React, {Component} from 'react';
import NavBar from '../layouts/NavBar';
class Compare extends Component{
    state = {
        text : '',
        text_w: ''
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text_k === '' || this.state.text_w===''){
            window.alert('Input field cannot be empty')
        }else{
           window.open('/result','_self');
        }
    }
    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value});  
    }
    render(){
        return (
            <div className='container'>
                <NavBar title="Docompar" icon="fab fa-500px"/>
                <h2 className='text-center' >Compare Student Assignment</h2>
                <hr />
                <form onSubmit={this.onSubmit} className='form text-center'>
                <div className='row' style={{marginTop:'100px'}}>
                <div className='col-md-6 form-group'>
                        <input type="text" className="form-control"   name="text_w"  placeholder="Enter Student Name" value={this.state.text_w} onChange={this.onChange} /><br/>
                        <input type="file" className="form-control"  name="docu" value={this.state.text} onChange={this.onChange} />
                   </div>

                   <div className='col-md-6 form-group'>
                        <input type="text" className="form-control"   name="text_k"  placeholder="Enter Student Name" value={this.state.text_k}   onChange={this.onChange} /><br/>
                        <input type="file" className="form-control"   name="docu"   onChange={this.onChange} />
                   </div>



                <input type="submit" value='Compare' className='btn btn-primary btn-block mt-5' />
                </div>

                </form> 
            </div>
        )
    }
   
}

export default Compare