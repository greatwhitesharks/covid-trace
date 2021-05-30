import React, { useEffect, useState } from 'react'
import { Col, Button, Typography, Divider, Row } from 'antd';
import { CopyTwoTone } from '@ant-design/icons';
import { Redirect, useParams,useHistory } from 'react-router-dom';
const { Text, Title } = Typography;

function CompanyInfoDetails(props) {

    const [companyDetails, setCompanyDetails] = useState({
        address: '',
        city: '',
        contact_no: '',
        district: '',
        fb_url: '',
        floor_no: '',
        google_plc: '',
        location: '',
        name: '',
        postal_code: '',
        premise_type: '',
        province: '',
        unit_no: '',
        location_type:''
    })

    let history = useHistory();

    function GoToQRPage(lang){
        history.push({
            pathname: `/qrpage/${companyDetails.location}`,
            state: { ...companyDetails }
          })
    }

    useEffect(() => {
        console.log(props.companyDetails)
        props.data && setCompanyDetails({
            ...props.data
        })
    }, [props.companyDetails])
    return (
        <div>
            <Title level={5} style={{ textAlign: "left", marginBottom: "-15px" }}>Business Location Details</Title>
            <Divider />

            <Row>
                <Col span={4}>
                    <Text strong>Name:</Text>
                </Col>
                <Col span={5}>
                    <Text>{companyDetails.name}</Text>
                </Col>
            </Row>
            <Row style={{ marginTop: "0.5em" }}>
                <Col span={4}>
                    <Text strong>Contact No:</Text>
                </Col>
                <Col span={5}>
                    <Text>{companyDetails.contact_no}</Text>
                </Col>
            </Row>
            <Row style={{ marginTop: "0.5em" }}>
                <Col span={4}>
                    <Text strong>Premise Type:</Text>
                </Col>
                <Col span={5}>
                    <Text>{companyDetails.premise_type}</Text>
                </Col>
            </Row>
            <Row style={{ marginTop: "0.5em" }}>
                <Text strong>Location</Text>
            </Row>
            <Row justify="left" style={{ marginTop: "1em" }}>
                <Col span={3}>
                    <Text strong style={{ marginRight: "1em" }}> Province: </Text>
                </Col>
                <Col span={3}>
                    <Text> {companyDetails.province} </Text>
                </Col>
                <Col span={3}>
                    <Text strong style={{ marginRight: "1em" }}> District: </Text>
                </Col>
                <Col span={3}>
                    <Text> {companyDetails.district} </Text>
                </Col>
                <Col span={3}>
                    <Text strong style={{ marginRight: "1em" }}> City: </Text>
                </Col>
                <Col span={4}>
                    <Text> {companyDetails.city} </Text>
                </Col>
            </Row>
            <Row justify="left" style={{ marginTop: "0.5em" }}>
                <Col span={3}>
                    <Text strong style={{ marginRight: "1em" }}> Postal Code: </Text>
                </Col>
                <Col span={3}>
                    <Text> {companyDetails.postal_code} </Text>
                </Col>
                <Col span={3}>
                    <Text strong style={{ marginRight: "1em" }}> Floor No: </Text>
                </Col>
                <Col span={3}>
                    <Text> {companyDetails.floor_no} </Text>
                </Col>
                <Col span={4}>
                    <Text strong style={{ marginRight: "1em" }}> Unit No: </Text>
                </Col>
                <Col>
                    <Text> {companyDetails.unit_no} </Text>
                </Col>
            </Row>
            <Row style={{ marginTop: "1em" }}>
                <Col span={4}>
                    <Text strong>Facebook URL:</Text>
                </Col>
                <Col span={18}>
                    <Text><a>{companyDetails.fb_url}</a></Text>
                </Col>
            </Row>
            <Divider />
            <Title level={5} style={{ textAlign: "center", marginTop: "-15px" }}>Get QR Code</Title>
            <Row justify="space-around" style={{ marginTop: "1em" }}>
                <Col sm={24} md={8}>
                    <Text strong>Sinhala QR Code</Text>
                </Col>
                <Col sm={24} md={7} >
                    <Text type="secondary">http://traceapp.com/qWefeIG</Text>
                </Col>
                <Col sm={24} md={1}>
                    <CopyTwoTone />
                </Col>
                <Col sm={24} md={6}>
                    <Button type="primary" onClick={()=>GoToQRPage('Sinhala')} data-toggle="tooltip" data-placement="top" title="Download QR Code">Download QR</Button>
                </Col>
            </Row>
            <Row justify="space-around" style={{ marginTop: "1em" }}>
                <Col sm={24} md={8}>
                    <Text strong>English QR Code</Text>
                </Col>
                <Col sm={24} md={7}>
                    <Text type="secondary">http://traceapp.com/eRjUklt</Text>
                </Col>
                <Col sm={24} md={1}>
                    <CopyTwoTone />
                </Col>
                <Col sm={24} md={6}>
                    <Button type="primary" onClick={()=>GoToQRPage('English')} data-toggle="tooltip" data-placement="top" title="Download QR Code">Download QR</Button>
                </Col>
            </Row>
            <Row justify="space-around" style={{ marginTop: "1em" }}>
                <Col sm={24} md={8}>
                    <Text strong>Tamil QR Code</Text>
                </Col>
                <Col sm={24} md={7}>
                    <Text type="secondary">http://traceapp.com/lIofRe</Text>
                </Col>
                <Col sm={24} md={1}>
                    <CopyTwoTone />
                </Col>
                <Col sm={24} md={6}>
                    <Button type="primary" onClick={()=>GoToQRPage('Tamil')} data-toggle="tooltip" data-placement="top" title="Download QR Code">Download QR</Button>
                </Col>
            </Row>
        </div>
    )
}


export default CompanyInfoDetails

