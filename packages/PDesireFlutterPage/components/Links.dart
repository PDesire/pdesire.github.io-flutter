import 'dart:html' as html;

import 'package:flutter_web/material.dart';
import 'package:PDesireFlutterPage/custom/CustomIcons.dart';

class Links extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24.0)
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          IconButton(
              icon: Icon(
                CustomIcons.github_circled,
                color: Colors.black,
              ),
              onPressed: () {
                html.window.open('https://github.com/PDesire', "GitHub");
              }),
          IconButton(
              icon: Icon(
                CustomIcons.twitter_circled,
                color: Colors.lightBlueAccent,
              ),
              onPressed: () {
                html.window.open('https://twitter.com/PDesireDev', "Twitter");
              }),
          IconButton(
              icon: Icon(
                CustomIcons.instagram,
                color: Colors.pink,
              ),
              onPressed: () {
                html.window.open('https://www.instagram.com/pdesire_chan', "Instagram");
              }),
          IconButton(
              icon: Icon(
                CustomIcons.email,
                color: Colors.black,
              ),
              onPressed: () {
                html.window.open('mailto:tristan@sqrls.de', "Mail");
              }),
        ],
      ),
    );
  }
}
