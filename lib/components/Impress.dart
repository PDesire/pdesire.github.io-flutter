import 'dart:async';
import 'dart:html' as html;

import 'package:PDesireFlutterPage/custom/CustomIcons.dart';
import 'package:flutter_web/material.dart';

class Impress extends StatefulWidget {
  @override
  _ImpressState createState() => _ImpressState();
}

class _ImpressState extends State<Impress> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.55,
      width: MediaQuery.of(context).size.width * 0.55,
      child: PageView(
        children: <Widget>[
          Card(
            elevation: 8,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(24.0)
            ),
            child: Container(
              padding: EdgeInsets.all(40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text('Über mich',
                      style: TextStyle(
                          fontFamily: 'NunitoSansBold',
                          fontSize: 30
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.04,
                  ),
                  Text('Ich bin Tristan, 19 Jahre alt, und hab einen Nebenjob als Junior Software Developer.',
                      style: TextStyle(
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.02,
                  ),
                  Text('Seit 8 Jahren bin ich schon bei der Programmierung dabei. Dabei habe ich ein großes Interessenspektrum.',
                      style: TextStyle(
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.02,
                  ),
                  Text('Meine Stärken liegen aber besonders im Frontend. Ich beheersche einige Programmiersprachen unter anderem Java, Kotlin, Dart, Typescript & more.',
                      style: TextStyle(
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.03,
                  ),
                  Text('Für mehr Infos, einfach diese Karte nach links oder rechts wischen.',
                      style: TextStyle(
                          fontSize: 15
                      )
                  ),
                ],
              ),
            ),
          ),
          Card(
            elevation: 8,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(24.0)
            ),
            child: Container(
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage('assets/tpt.jpg'),
                  fit: BoxFit.cover,
                ),
              ),
              child: Container(
                padding: EdgeInsets.all(40),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text('The Public Transport',
                        style: TextStyle(
                            fontFamily: 'NunitoSansBold',
                            color: Colors.white,
                            fontSize: 30
                        )
                    ),
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.04,
                    ),
                    Text('Die erste App für den öffentlichen Verkehr geschrieben in Flutter.',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 15
                        )
                    ),
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.02,
                    ),
                    Text('Dieses Projekt strebt an etwas zu verändern. Sie ist menschenorientiert und soll dir durch den Tag mit dem öffentlichen Verkehr helfen.',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 15
                        )
                    ),
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.02,
                    ),
                    Text('Das Ziel ist es den öffentlichen Verkehr zuverlässig und günstig zu gestalten, im Sinne der Benutzer.',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 15
                        )
                    ),
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.03,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        IconButton(
                            icon: Icon(
                              CustomIcons.github_circled,
                              color: Colors.white,
                            ),
                            onPressed: () {
                              html.window.open('https://github.com/PDesire', "GitHub");
                            }),
                        IconButton(
                            icon: Icon(
                              CustomIcons.google,
                              color: Colors.red,
                            ),
                            onPressed: () {
                              html.window.open('https://play.google.com/store/apps/details?id=de.pdesire.thepublictransportapp', "GooglePlay");
                            }),
                        IconButton(
                            icon: Icon(
                              CustomIcons.twitter_circled,
                              color: Colors.lightBlueAccent,
                            ),
                            onPressed: () {
                              html.window.open('https://twitter.com/PDesireDev', "GitHub");
                            }),
                        IconButton(
                            icon: Icon(
                              CustomIcons.instagram,
                              color: Colors.pink,
                            ),
                            onPressed: () {
                              html.window.open('https://twitter.com/PDesireDev', "GitHub");
                            }),
                      ],
                    )
                  ],
                )
              ),
            ),
          ),
          Card(
            color: Colors.blue,
            elevation: 8,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(24.0)
            ),
            child: Container(
              padding: EdgeInsets.all(40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text('Flutter Web',
                      style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'NunitoSansBold',
                          fontSize: 30
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.04,
                  ),
                  Text('Diese Seite ist zum großen Teil auch ein Experiment. Basierend auf dem Flutter Web Framework.',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.02,
                  ),
                  Text('Ziel war es dabei für mich herauszufinden ob sich Flutter Web für Webentwicklung eignet.',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.02,
                  ),
                  Text('Kann ich es empfehlen ? Jain. Man kann damit schöne UIs gestalten, nur sind die Funktionen noch eingeschränkt.',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 15
                      )
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.03,
                  ),
                  Text('Ich bin aber auf die Zukunft von Flutter gespannt. Eine schöne Vorstellung wenn ich irgendwann meine Flutter Apps auch im Web aufsetzen kann.',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 15
                      )
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
