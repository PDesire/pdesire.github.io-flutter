import 'dart:html' as html;

import 'package:PDesireFlutterPage/components/Badge.dart';
import 'package:PDesireFlutterPage/components/Impress.dart';

import 'package:flutter_web/material.dart';

import 'components/Links.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        fontFamily: 'NunitoSans',
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: NetworkImage('assets/background.jpg'),
                fit: BoxFit.cover,
              ),
            ),
            child: Container(
                alignment: Alignment.bottomLeft,
                child: Text("Photo by Jan-Philipp Thiele on Unsplash", style: TextStyle(color: Colors.white, fontSize: 10))
            ),
          ),
          Container(
            padding: EdgeInsets.fromLTRB(20, MediaQuery.of(context).size.height * 0.05, 20, 0),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(child: Badge()),
                  Center(child: Links()),
                  Center(child: Impress())
                ],
              ),
            ),
          ),
        ],
      )
    );
  }
}
