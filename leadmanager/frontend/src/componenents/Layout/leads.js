import React from 'react'
import { connect } from 'react-redux'
import { getLeads,deleteLeads } from '../../actions/leads';
import PropTypes from 'prop-types'

export class Leads extends React.Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        deleteLeads: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div className='container'>
                <table className='table table-striped table-dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.leads.map( lead =>
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button className='btn btn-danger' onClick={this.props.deleteLeads.bind(this,lead.id)}>DELETE</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        leads:state.leads.leads
    }
}


export default connect(mapStateToProps, { getLeads,deleteLeads })(Leads)
