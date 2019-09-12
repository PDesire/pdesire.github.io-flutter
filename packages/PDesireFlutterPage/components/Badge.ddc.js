define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const card = packages__flutter_web__material.src__material__card;
  const rounded_rectangle_border = packages__flutter_web__animation.src__painting__rounded_rectangle_border;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const decoration_image = packages__flutter_web__animation.src__painting__decoration_image;
  const image_provider = packages__flutter_web__animation.src__painting__image_provider;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const Badge = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 19,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 20,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 17,
        line: 21,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 18,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 31,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 13,
        line: 30,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 36,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 37,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 17,
        line: 35,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 43,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 44,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 17,
        line: 42,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 34,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 13,
        line: 33,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 11,
        line: 14,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 15,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 16,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 17,
        file: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C20 || CT.C20,
        name: null,
        column: 16,
        line: 13,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 9,
        line: 12,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 13,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 14,
        line: 11,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 7,
        line: 7,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "shape",
        column: 7,
        line: 8,
        file: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 11,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 12,
        line: 6,
        file: "org-dartlang-app:///packages/PDesireFlutterPage/components/Badge.dart"
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C6;
  let C5;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C24;
  let C20;
  let C19;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  Badge.Badge = class Badge extends framework.StatelessWidget {
    build(context) {
      return new card.Card.new({elevation: 8.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(24.0)}), child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.2, height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.2, decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, image: new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.fill, image: new image_provider.NetworkImage.new("https://avatars1.githubusercontent.com/u/20514588")})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Tristan Marsell", {style: new text_style.TextStyle.new({fontFamily: "NunitoSansBold", fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new text.Text.new("Junior Software Developer", {style: new text_style.TextStyle.new({fontFamily: "NunitoSans", fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (Badge.Badge.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Badge.Badge.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Badge.Badge.prototype;
  dart.addTypeTests(Badge.Badge);
  dart.setMethodSignature(Badge.Badge, () => ({
    __proto__: dart.getMethods(Badge.Badge.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Badge.Badge, "package:PDesireFlutterPage/components/Badge.dart");
  dart.trackLibraries("packages/PDesireFlutterPage/components/Badge", {
    "package:PDesireFlutterPage/components/Badge.dart": Badge
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Badge.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,+BACM,YACJ,uEACwB,wCAAS,gBAEjC,sCACe,+BAAI,cACjB,iCACsB,0CACU,kDACE,0CACrB,sBAChB,oCAC8C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACD,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,iBACjC,6CACQ,mCACT,+CACS,4BACL,oCACH,iHAIhB,+BACS,6DAET,gCACoB,sBAChB,kBACI,2BACO,0CACS,4BACF,+DAGlB,kBACI,qCACO,0CACS,wBACF;IAShC;;;;;;EACF","file":"Badge.ddc.js"}');
  // Exports:
  return {
    components__Badge: Badge
  };
});

//# sourceMappingURL=Badge.ddc.js.map
