import 'package:flutter_web/material.dart';

class Badge extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24.0)
      ),
      child: Container(
        padding: EdgeInsets.all(20),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
                width: MediaQuery.of(context).size.height * 0.20,
                height: MediaQuery.of(context).size.height * 0.20,
                decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    image: DecorationImage(
                        fit: BoxFit.fill,
                        image: NetworkImage(
                            "https://avatars1.githubusercontent.com/u/20514588")
                    )
                )
            ),
            SizedBox(
              width: 20,
            ),
            Column(
              children: <Widget>[
                Text(
                    'Tristan Marsell',
                    style: TextStyle(
                        fontFamily: "NunitoSansBold",
                        fontSize: 20
                    )
                ),
                Text(
                    'Junior Software Developer',
                    style: TextStyle(
                        fontFamily: "NunitoSans",
                        fontSize: 20
                    )
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
