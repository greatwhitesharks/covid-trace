import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';
import 'package:slcovid_tracker/models/location.dart';

class SafeEntryCheckInScreen extends StatefulWidget {
  final Location args;

  const SafeEntryCheckInScreen({Key key, this.args}) : super(key: key);

  @override
  _SafeEntryCheckInScreenState createState() =>
      _SafeEntryCheckInScreenState(args);
}

class _SafeEntryCheckInScreenState extends State<SafeEntryCheckInScreen> {
  final Location _location;

  _SafeEntryCheckInScreenState(this._location);

  @override
  Widget build(BuildContext context) {
    var _mediaQueryData = MediaQuery.of(context);
    var screenWidth = _mediaQueryData.size.width;
    print(_location);
    return Scaffold(
      appBar: new AppBar(
        centerTitle: true,
        backgroundColor: Color(0xffd9d9d9),
        title: Text("Safe In ", textAlign: TextAlign.center),
      ),
      body: Padding(
        padding: EdgeInsets.only(
            top: 20, left: screenWidth * 0.06, right: screenWidth * 0.06),
        child: Center(
          child: ListView(
            children: [
              Container(
                height: 50,
              ),
              Card(
                color: Theme.of(context).primaryColor,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.login_rounded,
                          size: 50,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Text('In',
                            style:
                                TextStyle(color: Colors.white, fontSize: 25)),
                      ],
                    ),
                    Card(
                      color: Colors.grey[200],
                      child: Column(
                        children: <Widget>[
                          Container(
                            width: screenWidth,
                            child: Column(
                              children: [
                                Container(
                                  height: 50,
                                ),
                                Text(
                                    _format(
                                      _location.checkIn,
                                    ),
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        color: Colors.black54,
                                        fontSize: 25)), //Date
                                Container(
                                  height: 5,
                                ),
                                Text(_location.name,
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        color: Colors.black54,
                                        fontSize: 25)), //Location
                                Container(
                                  height: 50,
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                height: 50,
              ),
              SizedBox(
                height: 50,
                width: screenWidth * 0.9, // specific value
                child: RaisedButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(0.0),
                  ),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  color: Color(0xff1DE9B6),
                  textColor: Colors.white,
                  child: Text("BACK TO HOME", style: TextStyle(fontSize: 25)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  String _format(DateTime start) {
    String day = DateFormat('yyyy-MM-dd').format(start);
    String startTime = DateFormat('jm').format(start);
    return day + "\n" + startTime;
  }
}
