import React, { useState, useEffect } from 'react'
import { Layout, Card, Button, Table, Tag, Space } from 'antd';
import Navbar from '../UiElements/Navbar/Navbar';
import BottomFooter from '../UiElements/BottomFooter';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, useParams } from 'react-router-dom';
const { Content } = Layout;


function Locations(props) {

  let { UserName } = useParams();


  const [state, setstate] = useState({
    orgList: []
  })

  function goToCompanyInfo(value) {
    console.log(value)
  }

  useEffect(() => {
    console.log(UserName)
    let tempReqOrgList = [];

    (props.locationData && props.locationReqestData) && (Object.keys(props.locationReqestData).map(locReqId => {
      if (props.locationReqestData[locReqId].org === UserName) {
        (Object.keys(props.locationData).map(locationId => {
          if (props.locationReqestData[locReqId].location === locationId) {
            tempReqOrgList.push({
              ...props.locationReqestData[locReqId],
              ...props.locationData[locationId],
              key: locReqId,
            })
            //console.log(props.locationData[locationId])
          }
        }))
        // console.log(props.locationReqestData[locReqId].org===UserName)

      }

    }))

    // console.log(tempOrgList)
    /*   setstate({
        orgList: tempOrgList
      }) */
    tempReqOrgList && setstate({
      orgList: tempReqOrgList
    })


  }, [props.locationData, props.locationReqestData])

  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Approval Status',
      key: 'Status',
      dataIndex: 'Status',
      render: approvalStatus => {
        let color;
        if (approvalStatus === 'approved') {
          color = 'green';
        } else if (approvalStatus === 'pending') {
          color = 'orange'
        } else {
          color = 'red'
        }
        return (
          <Tag color={color} key={approvalStatus}>
            {approvalStatus.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button size="small" onClick={() => goToCompanyInfo(record)} type="primary">Details</Button>
        </Space>
      ),
    },
  ];

  /* 
    const data = [
      {
        key: '1',
        location: '194/78B,Flower Rd, Bambalapitiya',
        approvalStatus: ['approved'],
      },
      {
        key: '2',
        location: '200/90B,Flower Rd, Wellawatta',
        approvalStatus: ['pending'],
      },
      {
        key: '3',
        location: '110/14A,Flower Rd, Mount Lavinia',
        approvalStatus: ['Rejected'],
      },
    ];
   */

  if (props.user == null) return <Redirect to='/signIn' />

  return (
    <div style={{ background: "#F2F2F2" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Content style={{ padding: '0 50px', display: 'flex', justifyContent: 'center' }}>
          <Card title="Locations" style={{ width: '1000px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginTop: "50px", overflow: "auto", minHeight: "64vh", marginBottom: "150px", position: "sticky" }}>
            <Table columns={columns} dataSource={state.orgList} />
          </Card>
        </Content>
        <BottomFooter />
      </Layout>
    </div>
  )
}

const mapStateToProps = (state) => {
  //console.log(state)
  return ({
    ...state,
    user: state.auth.auth.user,
    locationData: state.firestore.data.sc_location,
    locationReqestData: state.firestore.data.sc_request_status
  })
}


//export default connect(mapStateToProps)(Locations)

export default compose(
  firestoreConnect([
    { collection: 'sc_location' },
    { collection: 'sc_request_status' }
  ]), // sync todos collection from Firestore into redux
  connect(mapStateToProps),
)(Locations)
