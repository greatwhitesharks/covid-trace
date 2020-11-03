import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:slcovid_tracker/models/location.dart';

class SafeEntryCheckInScreen extends StatefulWidget {
  final Location args;

  const SafeEntryCheckInScreen({Key key, this.args}) : super(key: key);

  @override
  _SafeEntryCheckInScreenState createState() => _SafeEntryCheckInScreenState(args);
}

class _SafeEntryCheckInScreenState extends State<SafeEntryCheckInScreen> {
  final Location _location;

  _SafeEntryCheckInScreenState(this._location);

  @override
  Widget build(BuildContext context) {
    var _mediaQueryData = MediaQuery.of(context);
    var screenWidth = _mediaQueryData.size.width;

    return Scaffold(
      appBar: AppBar(
        // backgroundColor: Colors.transparent,
        title: Text("Safe Check In"),
        backgroundColor: Colors.grey[300],
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
                    ListTile(
                      leading: Icon(
                        Icons.login_rounded,
                        size: 50,
                        color: Colors.white,
                      ),
                      title: Text('Check In',
                          style: TextStyle(color: Colors.white, fontSize: 25)),
                    ),
                    Card(
                      color: Colors.grey[200],
                      child: Column(
                        // mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          // ListTile(
                          //   title: Text('Heart Shaker', style: TextStyle(color: Colors.black54),),
                          // ),
                          Container(
                            width: screenWidth,
                            child: Column(
                              children: [
                                Container(
                                  height: 50,
                                ),
                                Text(_location.time.toString(),
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        color: Colors.black54,
                                        fontSize: 25)), //Date
                                Container(
                                  height: 10,
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
              Container(
                margin: EdgeInsets.symmetric(
                    horizontal: screenWidth * 0.1, vertical: 30.0),
                child: ButtonTheme(
                  height: 50,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0)),
                    color: Theme.of(context).primaryColor,
                    textColor: Colors.white,
                    child: Text(
                      'BACK TO HOME',
                      textScaleFactor: 1.5,
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    },
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
