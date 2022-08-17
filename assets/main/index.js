window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AbstractCharacterModelInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef5c0MMJdRFj4V0zeF0ANlj", "AbstractCharacterModelInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CharacterSpineBoneModelInfo = exports.CharacterSpineBodyPartInfo = exports.CharacterSpineModelInfo = exports.CharacterModelAnimationInfo = exports.AbstractCharacterModelInfo = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractCharacterModelInfo = function() {
      function AbstractCharacterModelInfo() {}
      return AbstractCharacterModelInfo;
    }();
    exports.AbstractCharacterModelInfo = AbstractCharacterModelInfo;
    var CharacterModelAnimationInfo = function(_super) {
      __extends(CharacterModelAnimationInfo, _super);
      function CharacterModelAnimationInfo(path) {
        var _this = _super.call(this) || this;
        _this.m_PathAnimationModel = "";
        _this.m_PathAnimationModel = path;
        return _this;
      }
      return CharacterModelAnimationInfo;
    }(AbstractCharacterModelInfo);
    exports.CharacterModelAnimationInfo = CharacterModelAnimationInfo;
    var CharacterSpineModelInfo = function(_super) {
      __extends(CharacterSpineModelInfo, _super);
      function CharacterSpineModelInfo(path) {
        var _this = _super.call(this) || this;
        _this.m_PathSpineModel = "";
        _this.m_PathSpineModel = path;
        return _this;
      }
      return CharacterSpineModelInfo;
    }(AbstractCharacterModelInfo);
    exports.CharacterSpineModelInfo = CharacterSpineModelInfo;
    var CharacterSpineBodyPartInfo = function() {
      function CharacterSpineBodyPartInfo(slotName, partKey, pathSprite) {
        this.m_SlotName = slotName;
        this.m_PartKey = partKey;
        this.m_PathSprite = pathSprite;
      }
      return CharacterSpineBodyPartInfo;
    }();
    exports.CharacterSpineBodyPartInfo = CharacterSpineBodyPartInfo;
    var CharacterSpineBoneModelInfo = function(_super) {
      __extends(CharacterSpineBoneModelInfo, _super);
      function CharacterSpineBoneModelInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_heroKey = "10001";
        _this.m_PathSpineBone = "";
        _this._listBodyPartInfo = new Array();
        return _this;
      }
      Object.defineProperty(CharacterSpineBoneModelInfo.prototype, "ListBodyPartInfo", {
        get: function() {
          return this._listBodyPartInfo;
        },
        enumerable: false,
        configurable: true
      });
      CharacterSpineBoneModelInfo.prototype.AddBodyPartData = function(part) {
        this._listBodyPartInfo.push(part);
      };
      return CharacterSpineBoneModelInfo;
    }(AbstractCharacterModelInfo);
    exports.CharacterSpineBoneModelInfo = CharacterSpineBoneModelInfo;
    cc._RF.pop();
  }, {} ],
  AbstractCharacterRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30cebuj3yNAu4uiTgvXcGnA", "AbstractCharacterRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Commons_1 = require("../Commons");
    var GameDirection_1 = require("../GameDirection");
    var CharacterAnimationRendererController_1 = require("./CharacterAnimationRendererController");
    var CharacterContainer_1 = require("./CharacterContainer");
    var CharacterSpineBoneRendererController_1 = require("./CharacterSpineBoneRendererController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractCharacterRendererController = function() {
      function AbstractCharacterRendererController(tfParent, modelInfo) {
        this._modelInfo = modelInfo;
        this.LoadCharacterContainer(tfParent, null);
        null == this._characterContainer ? this.LoadRendererModel(this._characterContainer.m_TfRenderer) : console.log("------- ERROR: Null CharacterContainer");
      }
      AbstractCharacterRendererController.prototype.GetCharacterModelInfo = function() {
        return this._modelInfo;
      };
      AbstractCharacterRendererController.prototype.SetAnimationTimeScale = function(aniTimeScale) {};
      AbstractCharacterRendererController.prototype.LoadRendererModel = function(tfContainer) {};
      AbstractCharacterRendererController.prototype.LoadCharacterContainer = function(tfParent, callback) {
        var _this = this;
        var pathContainer = Commons_1.Commons.PATH_G2_BATTLE + "/Prefabs/CharacterContainer.prefap";
        cc.loader.loadRes(pathContainer, function(err, prefab) {
          var prefabContainer = prefab;
          if (null == prefabContainer) return;
          var goContainer = cc.instantiate(prefabContainer);
          goContainer.parent = tfParent;
          goContainer.setPosition(cc.Vec3.ZERO);
          _this._characterContainer = goContainer.getComponent(CharacterContainer_1.default);
        });
      };
      AbstractCharacterRendererController.prototype.SetBaseScale = function(baseScale) {
        this._characterContainer && (this._characterContainer.node.scale = baseScale);
      };
      AbstractCharacterRendererController.prototype.SetFacing = function(facing) {
        if (null == this._characterContainer) return;
        this._characterContainer.m_TfGroupFlip.scaleX = facing == GameDirection_1.GameDirection.RIGHT ? 1 : -1;
      };
      AbstractCharacterRendererController.prototype.SetCustomScale = function(scale) {
        if (null == this._characterContainer) return;
        this._characterContainer.m_TfGroupScale.scale = scale;
      };
      AbstractCharacterRendererController.prototype.SetLayerOrder = function(order) {
        this._characterContainer && (this._characterContainer.node.zIndex = order);
      };
      AbstractCharacterRendererController.prototype.HideModel = function() {
        this._characterContainer && (this._characterContainer.m_TfRenderer.active = false);
      };
      AbstractCharacterRendererController.prototype.ShowModel = function() {
        this._characterContainer && (this._characterContainer.m_TfRenderer.active = true);
      };
      AbstractCharacterRendererController.prototype.DestroyModel = function() {
        this._characterContainer.node.parent.removeChild(this._characterContainer.node);
      };
      AbstractCharacterRendererController.prototype.PlayAnimationLoop = function(animationName, duration) {
        void 0 === duration && (duration = 0);
      };
      AbstractCharacterRendererController.prototype.PlayAnimationOnce = function(animationName) {};
      AbstractCharacterRendererController.prototype.Ticks = function(deltaTime) {};
      AbstractCharacterRendererController.prototype.OnAnimationFinish = function(animationName) {
        console.log("OnAnimationFinish: " + animationName);
        this.AnimationFinishHandler(animationName);
      };
      AbstractCharacterRendererController.GenCharacterController = function(parent, modelInfo) {
        var ret = null;
        console.log(modelInfo.constructor.name);
        "CharacterModelAnimationInfo" == modelInfo.constructor.name ? ret = new CharacterAnimationRendererController_1.default(parent, modelInfo) : "CharacterSpineBoneModelInfo" == modelInfo.constructor.name && (ret = new CharacterSpineBoneRendererController_1.default(parent, modelInfo));
        return ret;
      };
      AbstractCharacterRendererController = __decorate([ ccclass ], AbstractCharacterRendererController);
      return AbstractCharacterRendererController;
    }();
    exports.default = AbstractCharacterRendererController;
    cc._RF.pop();
  }, {
    "../Commons": "Commons",
    "../GameDirection": "GameDirection",
    "./CharacterAnimationRendererController": "CharacterAnimationRendererController",
    "./CharacterContainer": "CharacterContainer",
    "./CharacterSpineBoneRendererController": "CharacterSpineBoneRendererController"
  } ],
  AbstractEffectRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4186QDPGtACq3TjcSgeUcB", "AbstractEffectRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AbstractEffectRendererController = void 0;
    var Commons_1 = require("../Commons");
    var GameDirection_1 = require("../GameDirection");
    var EffectContainer_1 = require("./EffectContainer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractEffectRendererController = function() {
      function AbstractEffectRendererController(tfParent, effInfo) {
        this._tfParent = tfParent;
        this._effBaseInfo = effInfo;
        this.LoadEffectContainer();
        if (null != this._effectContainer) {
          this.LoadRendererEffect(this._effectContainer.m_TfRenderer);
          this.HideEffect();
        }
      }
      AbstractEffectRendererController.prototype.GetEffectInfo = function() {
        return this._effBaseInfo;
      };
      AbstractEffectRendererController.prototype.LoadEffectContainer = function() {
        var _this = this;
        var pathContainer = Commons_1.Commons.PATH_G2_BATTLE + "/Prefabs/EffectContainer";
        cc.loader.loadRes(pathContainer, function(err, prefap) {
          var prefabContainer = prefap;
          if (null == prefabContainer) return;
          var goContainer = cc.instantiate(prefabContainer);
          goContainer.parent = _this._tfParent;
          goContainer.setPosition(cc.Vec2.ZERO);
          _this.m_TfEffect = goContainer;
          _this._effectContainer = goContainer.getComponent(EffectContainer_1.default);
        });
      };
      AbstractEffectRendererController.prototype.SetSortingOrder = function(order) {
        this._effectContainer && (this._effectContainer.m_SortingGroup.zIndex = order);
      };
      AbstractEffectRendererController.prototype.SetSortingLayer = function(layerName) {
        this._effectContainer;
      };
      AbstractEffectRendererController.prototype.HideEffect = function() {
        this._effectContainer.m_TfRenderer.active = false;
      };
      AbstractEffectRendererController.prototype.ShowEffect = function() {
        this._effectContainer.m_TfRenderer.active = true;
      };
      AbstractEffectRendererController.prototype.DestroyEffect = function() {
        null != this.m_TfEffect && this.m_TfEffect.parent.removeChild(this.m_TfEffect);
      };
      AbstractEffectRendererController.prototype.OnFinish = function() {
        this.HideEffect();
      };
      AbstractEffectRendererController.prototype.UpdateEffect = function(orderLayerBase, customScale, position, direction) {
        var scaleCombine = customScale * this._effBaseInfo.m_Scale;
        this._effectContainer.m_TfGroupScale.scale = scaleCombine;
        this._effectContainer.m_TfGroupFlip.scaleX = direction == GameDirection_1.GameDirection.RIGHT ? 1 : -1;
        this.SetSortingOrder(orderLayerBase + this._effBaseInfo.m_LayerOrder);
        var offsetX = customScale * this._effBaseInfo.m_Offset.x;
        var offsetY = customScale * this._effBaseInfo.m_Offset.y;
        direction == GameDirection_1.GameDirection.LEFT && (offsetX *= -1);
        this.m_TfEffect.setPosition(new cc.Vec2(offsetX + position.x, offsetY + position.y));
      };
      AbstractEffectRendererController.GenEffectController = function(tfParent, effInfo) {
        return null;
      };
      AbstractEffectRendererController = __decorate([ ccclass ], AbstractEffectRendererController);
      return AbstractEffectRendererController;
    }();
    exports.AbstractEffectRendererController = AbstractEffectRendererController;
    cc._RF.pop();
  }, {
    "../Commons": "Commons",
    "../GameDirection": "GameDirection",
    "./EffectContainer": "EffectContainer"
  } ],
  AbstractGameState4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89a13tf7jpCapKYxapwLHKd", "AbstractGameState4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AbstractGameState4 = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractGameState4 = function() {
      function AbstractGameState4(tapBattle) {
        this._tapBattle = tapBattle;
      }
      AbstractGameState4 = __decorate([ ccclass ], AbstractGameState4);
      return AbstractGameState4;
    }();
    exports.AbstractGameState4 = AbstractGameState4;
    cc._RF.pop();
  }, {} ],
  AbstractRenderUnitGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3aa84cZoAhM8bbJfM6fFrJ/", "AbstractRenderUnitGroup");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AbstractUnitRendererController_1 = require("./AbstractUnitRendererController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractRenderUnitGroup = function() {
      function AbstractRenderUnitGroup() {
        this._listRendererController = new Array();
      }
      AbstractRenderUnitGroup.prototype.AbstractRenderUnitGroup = function() {};
      AbstractRenderUnitGroup.prototype.LoadRenderUnits = function(tfContainer, lstUnitInfo) {
        var _this = this;
        lstUnitInfo.forEach(function(renderUnitInfo) {
          var renderer = AbstractUnitRendererController_1.default.GenUnitRendererController(tfContainer, renderUnitInfo);
          _this._listRendererController.push(renderer);
        });
      };
      AbstractRenderUnitGroup.prototype.Hide = function() {
        this._listRendererController.forEach(function(renderer) {
          renderer.Hide();
        });
      };
      AbstractRenderUnitGroup.prototype.Show = function() {
        this._listRendererController.forEach(function(renderer) {
          renderer.Show();
        });
      };
      AbstractRenderUnitGroup.prototype.DestroyGroup = function() {
        this._listRendererController.forEach(function(renderer) {
          renderer.DestroyRendererUnit();
        });
      };
      AbstractRenderUnitGroup.prototype.Ticks = function(deltaTime) {
        this._listRendererController.forEach(function(renderer) {
          renderer.Ticks(deltaTime);
        });
      };
      AbstractRenderUnitGroup = __decorate([ ccclass ], AbstractRenderUnitGroup);
      return AbstractRenderUnitGroup;
    }();
    exports.default = AbstractRenderUnitGroup;
    cc._RF.pop();
  }, {
    "./AbstractUnitRendererController": "AbstractUnitRendererController"
  } ],
  AbstractUnitRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d43b7uG5VO877RW0aCIOiw", "AbstractUnitRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnitSpineRendererController_1 = require("./UnitSpineRendererController");
    var UnitSpriteRendererController_1 = require("./UnitSpriteRendererController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AbstractUnitRendererController = function() {
      function AbstractUnitRendererController(tfParent, renderUnitInfo) {
        this._tfParent = tfParent;
        this._baseRenderUnitInfo = renderUnitInfo;
        this.LoadUnitRendererContainer();
        if (null != this._renderUnitContainer) {
          this.LoadRendererUnit(this._renderUnitContainer.m_TfRenderer);
          this.Show();
        }
      }
      AbstractUnitRendererController.prototype.GetRenderUnitInfo = function() {
        return this._baseRenderUnitInfo;
      };
      AbstractUnitRendererController.prototype.LoadUnitRendererContainer = function() {
        var pathContainer = "/Prefabs/RenderUnitContainer";
        this.ApplyRendererInfo();
      };
      AbstractUnitRendererController.prototype.ApplyRendererInfo = function() {};
      AbstractUnitRendererController.prototype.SetSortingOrder = function(order) {};
      AbstractUnitRendererController.prototype.SetSortingLayer = function(layerName) {};
      AbstractUnitRendererController.prototype.Hide = function() {};
      AbstractUnitRendererController.prototype.Show = function() {};
      AbstractUnitRendererController.prototype.DestroyRendererUnit = function() {};
      AbstractUnitRendererController.GenUnitRendererController = function(tfParent, renderUnitInfo) {
        if ("SpriteRenderUnitInfo" == renderUnitInfo.constructor.name) {
          var effController = new UnitSpriteRendererController_1.default(tfParent, renderUnitInfo);
          return effController;
        }
        if ("SpineRenderUnitInfo" == renderUnitInfo.constructor.name) {
          var effController = new UnitSpineRendererController_1.default(tfParent, renderUnitInfo);
          return effController;
        }
        return null;
      };
      AbstractUnitRendererController = __decorate([ ccclass ], AbstractUnitRendererController);
      return AbstractUnitRendererController;
    }();
    exports.default = AbstractUnitRendererController;
    cc._RF.pop();
  }, {
    "./UnitSpineRendererController": "UnitSpineRendererController",
    "./UnitSpriteRendererController": "UnitSpriteRendererController"
  } ],
  ActionTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aadbczORHFN9oibhEPVdbVu", "ActionTimer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionTimer = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ActionTimer = function() {
      function ActionTimer() {
        this.mDone = false;
      }
      ActionTimer.prototype.isDone = function() {
        return this.mDone;
      };
      ActionTimer = __decorate([ ccclass ], ActionTimer);
      return ActionTimer;
    }();
    exports.ActionTimer = ActionTimer;
    var ActionRepeatTimer = function(_super) {
      __extends(ActionRepeatTimer, _super);
      function ActionRepeatTimer(interval, job) {
        var _this = _super.call(this) || this;
        _this.mInterval = .5;
        _this.mCountTime = 0;
        _this.mDuration = -1;
        _this.mTotalTime = 0;
        _this.m_IgnoreTimeScale = false;
        _this.myActionJob = job;
        _this.mInterval = interval;
        _this.mDuration = -1;
        return _this;
      }
      ActionRepeatTimer.prototype.ResetCounter = function() {
        this.mCountTime = 0;
        this.mTotalTime = 0;
        this.mDone = false;
      };
      ActionRepeatTimer.prototype.Stop = function() {
        this.mDone = true;
      };
      ActionRepeatTimer.prototype.UpdateTimmer = function(deltaTime) {
        if (this.mDone) return;
        if (this.m_IgnoreTimeScale) {
          var timeScale = 1;
          var realTime = deltaTime / timeScale;
          this.mCountTime += realTime;
          this.mTotalTime += realTime;
        } else {
          this.mCountTime += deltaTime;
          this.mTotalTime += deltaTime;
        }
        if (this.mCountTime > this.mInterval) {
          this.mCountTime = 0;
          null != this.myActionJob && this.myActionJob();
        }
        if (this.mDuration > 0 && this.mTotalTime > this.mDuration) {
          null != this.mActionJobActionFinish && this.mActionJobActionFinish();
          this.mDone = true;
        }
      };
      ActionRepeatTimer = __decorate([ ccclass ], ActionRepeatTimer);
      return ActionRepeatTimer;
    }(ActionTimer);
    exports.default = ActionRepeatTimer;
    cc._RF.pop();
  }, {} ],
  BagView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24fca/U/WlEbby4VBnTrAjl", "BagView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("../../3rd/cores/UISuperLayout");
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var ItemsCtrl_1 = require("../ctrl/ItemsCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BagView = function(_super) {
      __extends(BagView, _super);
      function BagView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_indexTab = 0;
        return _this;
      }
      BagView.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
        this.CurrentUIType.UIForm_ShowMode = BaseUIForm_1.UIFormShowMode.ReverseChange;
      };
      BagView.prototype.start = function() {
        this.InitItem();
      };
      BagView.prototype.onRefreshEvent = function(node, index) {
        console.log(index);
      };
      BagView.prototype.onChangeTap = function(evt, data) {
        this.m_indexTab = data;
        this.InitItem();
      };
      BagView.prototype.InitItem = function() {
        this.m_lstitems = new Array();
        switch (this.m_indexTab) {
         case 0:
          this.m_lstitems = ItemsCtrl_1.ItemsCtrl.getInstancle().getAllItemUser();
          break;

         case 1:
          this.m_lstitems = ItemsCtrl_1.ItemsCtrl.getInstancle().getItemEquipUser();
          break;

         case 2:
          this.m_lstitems = ItemsCtrl_1.ItemsCtrl.getInstancle().getAllItemNormalUser();
        }
        null != this.m_lstitems && void 0 != this.m_lstitems && this.mLayOutItem.total(this.m_lstitems.length);
      };
      __decorate([ property(UISuperLayout_1.default) ], BagView.prototype, "mLayOutItem", void 0);
      __decorate([ property(cc.ToggleGroup) ], BagView.prototype, "mGroup", void 0);
      BagView = __decorate([ ccclass ], BagView);
      return BagView;
    }(BaseUIForm_1.default);
    exports.default = BagView;
    cc._RF.pop();
  }, {
    "../../3rd/cores/UISuperLayout": "UISuperLayout",
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../ctrl/ItemsCtrl": "ItemsCtrl"
  } ],
  BaseControler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dda897+UbdFkLI2EjX5/KzK", "BaseControler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseController = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseController = function(_super) {
      __extends(BaseController, _super);
      function BaseController() {
        var _this = _super.call(this) || this;
        _this.$options = Object.assign({}, BaseController_1._instance, _this.$options);
        return _this;
      }
      BaseController_1 = BaseController;
      BaseController.GetInstance = function() {
        if (null == this._instance) {
          var node = new cc.Node();
          this._instance = node.addComponent(this.name);
          UIManager_1.default.GetInstance().ScriptsNode.addChild(node);
        }
        return this._instance;
      };
      BaseController.prototype.AddEventListerner = function() {
        console.log("nhu loz");
      };
      BaseController.prototype.Enter = function() {
        this.AddEventListerner();
      };
      var BaseController_1;
      BaseController = BaseController_1 = __decorate([ ccclass ], BaseController);
      return BaseController;
    }(cc.Component);
    exports.BaseController = BaseController;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager"
  } ],
  BaseRenderUnitInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4887bLg1OBMOY+XfGk2qhlH", "BaseRenderUnitInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SpriteRenderUnitInfo = exports.SpineRenderUnitInfo = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseRenderUnitInfo = function() {
      function BaseRenderUnitInfo() {
        this.m_Offset = cc.Vec2.ZERO;
        this.m_Scale = 1;
        this.m_LayerOrder = 1;
      }
      BaseRenderUnitInfo.prototype.SetScale = function(scale) {
        this.m_Scale = scale;
        return this;
      };
      BaseRenderUnitInfo.prototype.SetOffet = function(offset) {
        this.m_Offset = offset;
        return this;
      };
      BaseRenderUnitInfo.prototype.SetLayerOrder = function(order) {
        this.m_LayerOrder = order;
        return this;
      };
      BaseRenderUnitInfo = __decorate([ ccclass ], BaseRenderUnitInfo);
      return BaseRenderUnitInfo;
    }();
    exports.default = BaseRenderUnitInfo;
    var SpineRenderUnitInfo = function(_super) {
      __extends(SpineRenderUnitInfo, _super);
      function SpineRenderUnitInfo(pathSpine, animation) {
        var _this = _super.call(this) || this;
        _this.m_PathSpine = "";
        _this.m_Animation = "";
        _this.m_PathSpine = pathSpine;
        _this.m_Animation = animation;
        return _this;
      }
      SpineRenderUnitInfo = __decorate([ ccclass ], SpineRenderUnitInfo);
      return SpineRenderUnitInfo;
    }(BaseRenderUnitInfo);
    exports.SpineRenderUnitInfo = SpineRenderUnitInfo;
    var SpriteRenderUnitInfo = function(_super) {
      __extends(SpriteRenderUnitInfo, _super);
      function SpriteRenderUnitInfo(pathSprite) {
        var _this = _super.call(this) || this;
        _this.m_PathSprite = "";
        _this.m_PathSprite = pathSprite;
        return _this;
      }
      SpriteRenderUnitInfo = __decorate([ ccclass ], SpriteRenderUnitInfo);
      return SpriteRenderUnitInfo;
    }(BaseRenderUnitInfo);
    exports.SpriteRenderUnitInfo = SpriteRenderUnitInfo;
    cc._RF.pop();
  }, {} ],
  BaseSkillController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db704lwzhFGDaO0crC0itnX", "BaseSkillController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseSkillController = void 0;
    var GameDirection_1 = require("../GameDirection");
    var EffectsGroup_1 = require("./EffectsGroup");
    var SkillMeleeController_1 = require("./SkillMeleeController");
    var SkillRangeController_1 = require("./SkillRangeController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseSkillController = function() {
      function BaseSkillController(baseSkillInfo) {
        this._skillLayerOrder = 0;
        this._customScale = 1;
        this._facingDirection = GameDirection_1.GameDirection.RIGHT;
        this._listEffectGroupHit = new Array();
        this._skillInfo = baseSkillInfo;
        this.InitSkill(this._skillInfo);
      }
      BaseSkillController.prototype.GetSkillInfo = function() {
        return this._skillInfo;
      };
      BaseSkillController.prototype.InitSkill = function(skillInfo) {
        this._effectGroupCast = new EffectsGroup_1.default(skillInfo.m_ListCastVisualEffectInfo, skillInfo.m_ListCastSoundEffectInfo);
        var effGroupHit = new EffectsGroup_1.default(skillInfo.m_ListHitVisualEffectInfo, skillInfo.m_ListHitSoundEffectInfo);
        this._listEffectGroupHit.push(effGroupHit);
      };
      BaseSkillController.prototype.PlayEffectCast = function(position) {
        var _a;
        null != this._effectGroupCast && (null === (_a = this._effectGroupCast) || void 0 === _a ? void 0 : _a.PlayGroupEffect(this._skillLayerOrder, this._customScale, position, this._facingDirection));
      };
      BaseSkillController.prototype.PlayEffectHit = function(position) {
        var effGroupFree = null;
        this._listEffectGroupHit.forEach(function(effGroup) {
          effGroup.IsResuable() && (effGroupFree = effGroup);
        });
        if (null == effGroupFree) {
          effGroupFree = new EffectsGroup_1.default(this._skillInfo.m_ListHitVisualEffectInfo, this._skillInfo.m_ListHitSoundEffectInfo);
          this._listEffectGroupHit.push(effGroupFree);
        }
        effGroupFree.PlayGroupEffect(this._skillLayerOrder, this._customScale, position, this._facingDirection);
      };
      BaseSkillController.prototype.DestroySkill = function() {
        var _a;
        null === (_a = this._effectGroupCast) || void 0 === _a ? void 0 : _a.DestroyGroupEffect();
        this._listEffectGroupHit.forEach(function(effGroup) {
          null === effGroup || void 0 === effGroup ? void 0 : effGroup.DestroyGroupEffect();
        });
      };
      BaseSkillController.prototype.SetCustomScale = function(scale) {
        this._customScale = scale;
      };
      BaseSkillController.prototype.SetFacing = function(facing) {
        this._facingDirection = facing;
      };
      BaseSkillController.prototype.SetSkillLayerOrder = function(layerOrder) {
        this._skillLayerOrder = layerOrder;
      };
      BaseSkillController.prototype.Ticks = function(deltaTime) {
        var _a;
        null === (_a = this._effectGroupCast) || void 0 === _a ? void 0 : _a.Ticks(deltaTime);
        this._listEffectGroupHit.forEach(function(effGroup) {
          null === effGroup || void 0 === effGroup ? void 0 : effGroup.Ticks(deltaTime);
        });
      };
      BaseSkillController.GenSkillController = function(skillInfo) {
        cc.error("GenSkillController", skillInfo);
        if ("MeleeSkillInfo" == skillInfo.constructor.name) {
          var skillController = new SkillMeleeController_1.default(skillInfo);
          return skillController;
        }
        if ("RangeSkillInfo" == skillInfo.constructor.name) {
          var skillController = new SkillRangeController_1.default(skillInfo);
          return skillController;
        }
        cc.error("---- ERROR: Can not gen skill controller");
        return null;
      };
      BaseSkillController = __decorate([ ccclass ], BaseSkillController);
      return BaseSkillController;
    }();
    exports.BaseSkillController = BaseSkillController;
    cc._RF.pop();
  }, {
    "../GameDirection": "GameDirection",
    "./EffectsGroup": "EffectsGroup",
    "./SkillMeleeController": "SkillMeleeController",
    "./SkillRangeController": "SkillRangeController"
  } ],
  BaseSkillInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27b34f/StVBjoP0th4DWyKg", "BaseSkillInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SkillProjectileOrbit = exports.SkillProjectileInfo = exports.RangeSkillInfo = exports.MeleeSkillInfo = exports.SkillTargetInfo = exports.SkillTargetArgs = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseSkillInfo = function() {
      function BaseSkillInfo() {
        this.m_ListCastVisualEffectInfo = new Array();
        this.m_ListCastSoundEffectInfo = new Array();
        this.m_ListHitVisualEffectInfo = new Array();
        this.m_ListHitSoundEffectInfo = new Array();
      }
      BaseSkillInfo.prototype.AddVisualEffectCast = function(effInfo) {
        this.m_ListCastVisualEffectInfo.push(effInfo);
      };
      BaseSkillInfo.prototype.AddVisualEffectHit = function(effInfo) {
        this.m_ListHitVisualEffectInfo.push(effInfo);
      };
      BaseSkillInfo.prototype.AddSoundEffectCast = function(effInfo) {
        this.m_ListCastSoundEffectInfo.push(effInfo);
      };
      BaseSkillInfo.prototype.AddSoundEffectHit = function(effInfo) {
        this.m_ListHitSoundEffectInfo.push(effInfo);
      };
      BaseSkillInfo = __decorate([ ccclass ], BaseSkillInfo);
      return BaseSkillInfo;
    }();
    exports.default = BaseSkillInfo;
    var SkillTargetArgs = function() {
      function SkillTargetArgs() {
        this.m_ListSkillTarget = new Array();
      }
      SkillTargetArgs.prototype.AddTarget = function(targetInfo) {
        this.m_ListSkillTarget.push(targetInfo);
      };
      SkillTargetArgs = __decorate([ ccclass ], SkillTargetArgs);
      return SkillTargetArgs;
    }();
    exports.SkillTargetArgs = SkillTargetArgs;
    var SkillTargetInfo = function() {
      function SkillTargetInfo() {}
      SkillTargetInfo = __decorate([ ccclass ], SkillTargetInfo);
      return SkillTargetInfo;
    }();
    exports.SkillTargetInfo = SkillTargetInfo;
    var MeleeSkillInfo = function(_super) {
      __extends(MeleeSkillInfo, _super);
      function MeleeSkillInfo() {
        var _this = _super.call(this) || this;
        _this.m_DelayDealingDamage = .5;
        _this.m_DelayCauseHitEffect = 0;
        return _this;
      }
      MeleeSkillInfo.prototype.SetDelayCauseHitEffect = function(delay) {
        this.m_DelayCauseHitEffect = delay;
        return this;
      };
      MeleeSkillInfo.prototype.SetDelayDealingDamage = function(delay) {
        this.m_DelayDealingDamage = delay;
        return this;
      };
      MeleeSkillInfo = __decorate([ ccclass ], MeleeSkillInfo);
      return MeleeSkillInfo;
    }(BaseSkillInfo);
    exports.MeleeSkillInfo = MeleeSkillInfo;
    var RangeSkillInfo = function(_super) {
      __extends(RangeSkillInfo, _super);
      function RangeSkillInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_DelayLaunchProjectile = .5;
        _this.m_DurationProjectileFly = 1;
        _this.m_OffsetLaunchProjectile = cc.Vec2.ZERO;
        return _this;
      }
      RangeSkillInfo.prototype.RangeSkillInfo = function() {};
      RangeSkillInfo.prototype.SetDelayLaunchProjectile = function(delay) {
        this.m_DelayLaunchProjectile = delay;
        return this;
      };
      RangeSkillInfo.prototype.SetDurationProjectileFly = function(duration) {
        this.m_DurationProjectileFly = duration;
        return this;
      };
      RangeSkillInfo.prototype.SetOffsetLaucheProjectile = function(offset) {
        this.m_OffsetLaunchProjectile = offset;
        return this;
      };
      RangeSkillInfo = __decorate([ ccclass ], RangeSkillInfo);
      return RangeSkillInfo;
    }(BaseSkillInfo);
    exports.RangeSkillInfo = RangeSkillInfo;
    var SkillProjectileInfo = function() {
      function SkillProjectileInfo() {
        this.m_ListRenderUnitInfo = new Array();
        this.m_RotateSpeed = 0;
        this.m_Orbit = SkillProjectileOrbit.LINEAR;
      }
      SkillProjectileInfo.prototype.SetOrbit = function(orbit) {
        this.m_Orbit = orbit;
        return this;
      };
      SkillProjectileInfo.prototype.SetRotateSpeed = function(rotateSpeed) {
        this.m_RotateSpeed = rotateSpeed;
        return this;
      };
      SkillProjectileInfo.prototype.AddRenderUnitInfo = function(unitInfo) {
        this.m_ListRenderUnitInfo.push(unitInfo);
      };
      SkillProjectileInfo = __decorate([ ccclass ], SkillProjectileInfo);
      return SkillProjectileInfo;
    }();
    exports.SkillProjectileInfo = SkillProjectileInfo;
    var SkillProjectileOrbit;
    (function(SkillProjectileOrbit) {
      SkillProjectileOrbit[SkillProjectileOrbit["LINEAR"] = 0] = "LINEAR";
      SkillProjectileOrbit[SkillProjectileOrbit["THROWING"] = 1] = "THROWING";
    })(SkillProjectileOrbit = exports.SkillProjectileOrbit || (exports.SkillProjectileOrbit = {}));
    cc._RF.pop();
  }, {} ],
  BaseUIForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32b24SH29RLjL+nJKQ7WZkn", "BaseUIForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIType = exports.UIFormLucencyType = exports.UIFormShowMode = exports.UIFormType = void 0;
    var UIManager_1 = require("./UIManager");
    var UIFormType;
    (function(UIFormType) {
      UIFormType[UIFormType["Normal"] = 0] = "Normal";
      UIFormType[UIFormType["Fixed"] = 1] = "Fixed";
      UIFormType[UIFormType["Popup"] = 2] = "Popup";
    })(UIFormType = exports.UIFormType || (exports.UIFormType = {}));
    var UIFormShowMode;
    (function(UIFormShowMode) {
      UIFormShowMode[UIFormShowMode["Normal"] = 0] = "Normal";
      UIFormShowMode[UIFormShowMode["ReverseChange"] = 1] = "ReverseChange";
      UIFormShowMode[UIFormShowMode["HideOther"] = 2] = "HideOther";
    })(UIFormShowMode = exports.UIFormShowMode || (exports.UIFormShowMode = {}));
    var UIFormLucencyType;
    (function(UIFormLucencyType) {
      UIFormLucencyType[UIFormLucencyType["Luceny"] = 0] = "Luceny";
      UIFormLucencyType[UIFormLucencyType["TransLucence"] = 1] = "TransLucence";
      UIFormLucencyType[UIFormLucencyType["ImPenetrable"] = 2] = "ImPenetrable";
      UIFormLucencyType[UIFormLucencyType["Penetra"] = 3] = "Penetra";
    })(UIFormLucencyType = exports.UIFormLucencyType || (exports.UIFormLucencyType = {}));
    var UIType = function() {
      function UIType() {
        this.IsClearReverseChange = false;
        this.UIForm_Type = UIFormType.Normal;
        this.UIForm_ShowMode = UIFormShowMode.Normal;
        this.UIForm_LucencyType = UIFormLucencyType.Luceny;
        this.IsClearReverseChange = false;
        this.UIForm_Type = UIFormType.Normal;
        this.UIForm_ShowMode = UIFormShowMode.Normal;
        this.UIForm_LucencyType = UIFormLucencyType.Luceny;
      }
      return UIType;
    }();
    exports.UIType = UIType;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseUIForm = function(_super) {
      __extends(BaseUIForm, _super);
      function BaseUIForm() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(BaseUIForm.prototype, "CurrentUIType", {
        get: function() {
          null == this._currentUIType && (this.CurrentUIType = new UIType());
          return this._currentUIType;
        },
        set: function(value) {
          this._currentUIType = value;
        },
        enumerable: false,
        configurable: true
      });
      BaseUIForm.prototype.Display = function() {
        this.node.active = true;
        if (this._currentUIType.UIForm_Type == UIFormType.Popup) {
          console.log("PopUp");
          UIManager_1.default.GetInstance().UIMaskPanel.active = true;
        }
      };
      BaseUIForm.prototype.Hiding = function() {
        this.node.active = false;
        this._currentUIType.UIForm_Type == UIFormType.Popup && (UIManager_1.default.GetInstance().UIMaskPanel.active = false);
      };
      BaseUIForm.prototype.ReDisplay = function() {
        this.node.active = true;
        if (this._currentUIType.UIForm_Type == UIFormType.Popup) {
          console.log("PopUp");
          UIManager_1.default.GetInstance().UIMaskPanel.active = true;
        }
      };
      BaseUIForm.prototype.Freeze = function() {
        this.node.active = true;
      };
      BaseUIForm.prototype.RegisterButtonObjectEvent = function(buttonName, handle) {
        var node = cc.find(buttonName, this.node);
        node.on("click", handle);
      };
      BaseUIForm.prototype.OpenUIform = function(uiFormName) {
        console.log("OpenUIform:" + uiFormName);
        UIManager_1.default.GetInstance().ShowUIForms(uiFormName);
      };
      BaseUIForm.prototype.CloseUIForm = function() {
        var strUIFromName = "";
        var intPosition = -1;
        strUIFromName = this.node.name;
        intPosition = strUIFromName.indexOf(".");
        -1 != intPosition && (strUIFromName = strUIFromName.substring(intPosition + 1));
        UIManager_1.default.GetInstance().CloseOrReturnUIForms(strUIFromName);
      };
      BaseUIForm = __decorate([ ccclass ], BaseUIForm);
      return BaseUIForm;
    }(cc.Component);
    exports.default = BaseUIForm;
    cc._RF.pop();
  }, {
    "./UIManager": "UIManager"
  } ],
  BaseVisualEffectInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e68fysc8lATpTFdA90382B", "BaseVisualEffectInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseVisualEffectInfo = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseVisualEffectInfo = function(_super) {
      __extends(BaseVisualEffectInfo, _super);
      function BaseVisualEffectInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_Offset = cc.Vec2.ZERO;
        _this.m_DelayStart = 0;
        _this.m_Scale = 1;
        _this.m_LayerOrder = 1;
        return _this;
      }
      BaseVisualEffectInfo.prototype.SetScale = function(scale) {
        this.m_Scale = scale;
        return this;
      };
      BaseVisualEffectInfo.prototype.SetOffet = function(offset) {
        this.m_Offset = offset;
        return this;
      };
      BaseVisualEffectInfo.prototype.SetDelayStart = function(delay) {
        this.m_DelayStart = delay;
        return this;
      };
      BaseVisualEffectInfo.prototype.SetLayerOrder = function(order) {
        this.m_LayerOrder = order;
        return this;
      };
      BaseVisualEffectInfo = __decorate([ ccclass ], BaseVisualEffectInfo);
      return BaseVisualEffectInfo;
    }(cc.Component);
    exports.BaseVisualEffectInfo = BaseVisualEffectInfo;
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {}, {} ],
  CanvasHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23ad9SM08hAdamvkOaApvLo", "CanvasHelper");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CanvasHelper = function(_super) {
      __extends(CanvasHelper, _super);
      function CanvasHelper() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CanvasHelper_1 = CanvasHelper;
      CanvasHelper.GetCanvasSize = function(goCanvas) {
        void 0 === goCanvas && (goCanvas = null);
        null == goCanvas && (goCanvas = cc.find("Canvas"));
        if (null == goCanvas) return cc.Vec2.ONE;
        return new cc.Vec2(goCanvas.width, goCanvas.height);
      };
      CanvasHelper.GetCanvas = function() {
        var goCanvasPopup = cc.find("CanvasPopup");
        var goCanvasExpand = cc.find("CanvasExpand");
        var goCanvasTopMost = cc.find("CanvasTopMost");
        if (null != goCanvasTopMost) return goCanvasTopMost;
        if (null != goCanvasExpand) return goCanvasExpand;
        if (null != goCanvasPopup) return goCanvasPopup;
        var goCanvas = cc.find("Canvas");
        return goCanvas;
      };
      CanvasHelper.GetCanvasNew = function() {
        return this.GetCanvas();
      };
      CanvasHelper.GetSize = function(go) {
        return null != go ? new cc.Vec2(go.width, go.height) : cc.Vec2.ONE;
      };
      CanvasHelper.SetSize = function(go, size) {
        if (null != go) {
          go.width = size.x;
          go.height = size.y;
        }
      };
      CanvasHelper.GetPosition = function(go) {
        return null != go ? new cc.Vec2(go.anchorX, go.anchorY) : cc.Vec2.ZERO;
      };
      CanvasHelper.DestroyObject = function(go) {
        if (null == go) return;
        go.parent.removeChild(go);
      };
      CanvasHelper.SetPosition = function(go, position) {
        null != go && go.setAnchorPoint(position);
      };
      var CanvasHelper_1;
      CanvasHelper.CANVASBATTLE = "CanvasBattle";
      CanvasHelper.CANVASPOPUP = "CanvasPopup";
      CanvasHelper.CANVASEXPEND = "CanvasExpend";
      CanvasHelper.CANVASLOADING = "Loading";
      CanvasHelper.CANVASBEYOND = "BeyondCanvas";
      CanvasHelper.CANVASTOPMOST = "CanvasTopMost";
      CanvasHelper.CANVASVIDEO = "CanvasVideo";
      CanvasHelper.QueueCanvas = [ CanvasHelper_1.CANVASBATTLE, CanvasHelper_1.CANVASPOPUP, CanvasHelper_1.CANVASEXPEND, CanvasHelper_1.CANVASLOADING, CanvasHelper_1.CANVASBEYOND, CanvasHelper_1.CANVASTOPMOST, CanvasHelper_1.CANVASVIDEO ];
      CanvasHelper = CanvasHelper_1 = __decorate([ ccclass ], CanvasHelper);
      return CanvasHelper;
    }(cc.Component);
    exports.default = CanvasHelper;
    cc._RF.pop();
  }, {} ],
  CharacterAnimationRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5d37GJuKZGRZrXHJZLkabc", "CharacterAnimationRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CharacterAnimationRendererController = function() {
      function CharacterAnimationRendererController(tfParent, modelInfo) {}
      CharacterAnimationRendererController.prototype.GetCharacterModelInfo = function() {};
      CharacterAnimationRendererController.prototype.SetAnimationTimeScale = function(aniTimeScale) {};
      CharacterAnimationRendererController.prototype.LoadRendererModel = function(tfContainer) {};
      CharacterAnimationRendererController.prototype.LoadCharacterContainer = function(tfParent) {};
      CharacterAnimationRendererController.prototype.SetBaseScale = function(baseScale) {};
      CharacterAnimationRendererController.prototype.SetFacing = function(facing) {};
      CharacterAnimationRendererController.prototype.SetCustomScale = function(scale) {};
      CharacterAnimationRendererController.prototype.SetLayerOrder = function(order) {};
      CharacterAnimationRendererController.prototype.HideModel = function() {};
      CharacterAnimationRendererController.prototype.ShowModel = function() {};
      CharacterAnimationRendererController.prototype.DestroyModel = function() {};
      CharacterAnimationRendererController.prototype.PlayAnimationLoop = function(animationName, duration) {};
      CharacterAnimationRendererController.prototype.PlayAnimationOnce = function(animationName) {};
      CharacterAnimationRendererController.prototype.Ticks = function(deltaTime) {};
      CharacterAnimationRendererController.prototype.OnAnimationFinish = function(animationName) {
        console.log("OnAnimationFinish: " + animationName);
        this.AnimationFinishHandler(animationName);
      };
      CharacterAnimationRendererController = __decorate([ ccclass ], CharacterAnimationRendererController);
      return CharacterAnimationRendererController;
    }();
    exports.default = CharacterAnimationRendererController;
    cc._RF.pop();
  }, {} ],
  CharacterContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "324706I9d5IZokWSAuuactZ", "CharacterContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CharacterContainer = function(_super) {
      __extends(CharacterContainer, _super);
      function CharacterContainer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      __decorate([ property(cc.Node) ], CharacterContainer.prototype, "m_TfGroupScale", void 0);
      __decorate([ property(cc.Node) ], CharacterContainer.prototype, "m_TfGroupFlip", void 0);
      __decorate([ property(cc.Node) ], CharacterContainer.prototype, "m_TfRenderer", void 0);
      CharacterContainer = __decorate([ ccclass ], CharacterContainer);
      return CharacterContainer;
    }(cc.Component);
    exports.default = CharacterContainer;
    cc._RF.pop();
  }, {} ],
  CharacterSpineBoneRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f183vgQo1CbJOQULlfJWoG", "CharacterSpineBoneRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResourceManager_1 = require("../../UIFramework/ResourceManager");
    var UIManager_1 = require("../../UIFramework/UIManager");
    var Commons_1 = require("../Commons");
    var GameDirection_1 = require("../GameDirection");
    var CharacterContainer_1 = require("./CharacterContainer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CharacterSpineBoneRendererController = function() {
      function CharacterSpineBoneRendererController(tfParent, modelInfo) {
        var _this = this;
        this._aniNamePlayOnce = "";
        this._modelInfo = modelInfo;
        this.LoadCharacterContainer(tfParent, function() {
          null != _this._characterContainer ? _this.LoadRendererModel(_this._characterContainer.m_TfRenderer) : console.log("------- ERROR: Null CharacterContainer");
        });
      }
      CharacterSpineBoneRendererController.prototype.GetCharacterModelInfo = function() {
        return this._modelInfo;
      };
      CharacterSpineBoneRendererController.prototype.SetAnimationTimeScale = function(aniTimeScale) {};
      CharacterSpineBoneRendererController.prototype.LoadRendererModel = function(tfRendererContainer) {
        var _this = this;
        var modelInfo = this.GetCharacterModelInfo();
        var pathSpineCharacter = Commons_1.Commons.PATH_G2_BATTLE + "/Prefabs/SpineCharacter";
        cc.loader.loadRes(pathSpineCharacter, function(er, prefap) {
          var prefabSpineCharacter = prefap;
          if (null == prefabSpineCharacter) return;
          var goSpineChar = cc.instantiate(prefabSpineCharacter);
          goSpineChar.parent = tfRendererContainer;
          goSpineChar.setPosition(cc.Vec3.ZERO);
          var tfSkeleton = cc.find("SkeletonAnimation", goSpineChar);
          _this._skeletonAnimation = tfSkeleton.getComponent(dragonBones.ArmatureDisplay);
          var pathSpineBone = modelInfo.m_PathSpineBone + "_SkeletonData";
          ResourceManager_1.default.GetInstance().OnLoadDragonBone("DragonBone/" + modelInfo.m_heroKey, _this._skeletonAnimation, function() {
            _this._skeletonAnimation.armatureName = modelInfo.m_heroKey;
            _this._skeletonAnimation.node.parent = goSpineChar;
            _this._skeletonAnimation.node.setPosition(cc.Vec3.ZERO);
            _this._skeletonAnimation.playAnimation("stand", 0);
            if (null == _this._skeletonAnimation) return;
            _this._skeletonAnimation.addEventListener(dragonBones.EventObject.COMPLETE, function(evt) {
              _this.OnSpineAnimationFinish(_this._skeletonAnimation.animationName);
            }, _this);
          });
        });
      };
      CharacterSpineBoneRendererController.prototype.LoadCharacterContainer = function(tfRendererContainer, callback) {
        var _this = this;
        var pathContainer = Commons_1.Commons.PATH_G2_BATTLE + "/Prefabs/CharacterContainer";
        cc.loader.loadRes(pathContainer, function(err, prefab) {
          var prefabContainer = prefab;
          if (null == prefabContainer) return;
          var goContainer = cc.instantiate(prefabContainer);
          goContainer.parent = tfRendererContainer;
          goContainer.setPosition(cc.Vec3.ZERO);
          console.log(goContainer);
          _this._characterContainer = goContainer.getComponent(CharacterContainer_1.default);
          callback();
        });
      };
      CharacterSpineBoneRendererController.prototype.OnSpineAnimationFinish = function(aniName) {
        "death" == aniName && this.OnAnimationFinish(aniName);
        aniName == this._aniNamePlayOnce ? this.OnAnimationFinish(aniName) : ("attack" == aniName && "skill" == this._aniNamePlayOnce || "skill" == aniName && "attack" == this._aniNamePlayOnce) && this.OnAnimationFinish(aniName);
      };
      CharacterSpineBoneRendererController.prototype.OnAnimationFinish = function(animationName) {
        var _a;
        null === (_a = this.AnimationFinishHandler) || void 0 === _a ? void 0 : _a.call(this, animationName);
      };
      CharacterSpineBoneRendererController.prototype.SetBaseScale = function(baseScale) {
        this._characterContainer && (this._characterContainer.node.scale = baseScale);
      };
      CharacterSpineBoneRendererController.prototype.SetFacing = function(facing) {
        if (null == this._characterContainer) return;
        this._characterContainer.m_TfGroupFlip.setScale(new cc.Vec2(facing == GameDirection_1.GameDirection.RIGHT ? 1 : -1, 1));
      };
      CharacterSpineBoneRendererController.prototype.SetCustomScale = function(scale) {
        if (null == this._characterContainer) return;
        this._characterContainer.m_TfGroupScale.scale = scale;
      };
      CharacterSpineBoneRendererController.prototype.SetLayerOrder = function(order) {
        this._characterContainer;
      };
      CharacterSpineBoneRendererController.prototype.HideModel = function() {
        this._characterContainer && (this._characterContainer.m_TfRenderer.active = false);
      };
      CharacterSpineBoneRendererController.prototype.ShowModel = function() {
        this._characterContainer && (this._characterContainer.m_TfRenderer.active = true);
      };
      CharacterSpineBoneRendererController.prototype.DestroyModel = function() {
        this._characterContainer.node.parent.removeChild(this._characterContainer.node);
      };
      CharacterSpineBoneRendererController.prototype.PlayAnimationLoop = function(animationName, duration) {
        var _this = this;
        this.ResetAnimation();
        if (null == this._skeletonAnimation) {
          UIManager_1.default.GetInstance().scheduleOnce(function() {
            _this.PlayAnimationLoop(animationName, duration);
          }, .2);
          return;
        }
        this._skeletonAnimation.playAnimation(animationName, 0);
      };
      CharacterSpineBoneRendererController.prototype.ResetAnimation = function() {
        this._aniNamePlayOnce = "";
      };
      CharacterSpineBoneRendererController.prototype.PlayAnimationOnce = function(animationName) {
        this.ResetAnimation();
        if (null == this._skeletonAnimation) return;
        this._aniNamePlayOnce = "attack" == animationName ? "attack" : "death" == animationName ? "attack" : animationName;
        try {
          this._skeletonAnimation.playAnimation(animationName, 1);
        } catch (ex) {}
      };
      CharacterSpineBoneRendererController.prototype.Ticks = function(deltaTime) {};
      CharacterSpineBoneRendererController = __decorate([ ccclass ], CharacterSpineBoneRendererController);
      return CharacterSpineBoneRendererController;
    }();
    exports.default = CharacterSpineBoneRendererController;
    cc._RF.pop();
  }, {
    "../../UIFramework/ResourceManager": "ResourceManager",
    "../../UIFramework/UIManager": "UIManager",
    "../Commons": "Commons",
    "../GameDirection": "GameDirection",
    "./CharacterContainer": "CharacterContainer"
  } ],
  Commons: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6792r9eqdGt532Sfh5x9ny", "Commons");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Commons = void 0;
    var Commons = function() {
      function Commons() {}
      Commons.PATH_G2_BATTLE = "";
      return Commons;
    }();
    exports.Commons = Commons;
    cc._RF.pop();
  }, {} ],
  ConstDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a708VUyeJJpLcR0I+/3quB", "ConstDefine");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConstDefine = function() {
      function ConstDefine() {}
      ConstDefine.WELLCOME_SCREEN = "WellcomeScreen";
      ConstDefine.LOADDING = "Loading";
      ConstDefine.IDLE_SCREEN = "MainIdleScreen";
      ConstDefine.DONG_DOI = "MainCharView";
      ConstDefine.BAG = "BagView";
      ConstDefine.SKILL = "SkillView";
      ConstDefine.QUEST = "QuestView";
      ConstDefine.SHOP = "ShopView";
      ConstDefine.BATTLE = "SceneBattle4Ctrl";
      ConstDefine.TAPPOPUP = "TapPopupTutorial";
      ConstDefine.TAPPOPUPFINGER = "TapPopupFinger";
      ConstDefine = __decorate([ ccclass ], ConstDefine);
      return ConstDefine;
    }();
    exports.default = ConstDefine;
    cc._RF.pop();
  }, {} ],
  ConstantsFk4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9bebzFx+RDZZBKDfAc6Vsd", "ConstantsFk4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConstantsFk4 = function() {
      function ConstantsFk4() {}
      ConstantsFk4_1 = ConstantsFk4;
      ConstantsFk4.BuildColor = function(color, value) {
        return ConstantsFk4_1.StringFormat(color, value);
      };
      var ConstantsFk4_1;
      ConstantsFk4.PATH_ROOT = "GameFk4";
      ConstantsFk4.PATH_SHARE_RESOURCE = "GameFkRes";
      ConstantsFk4.PATH_POPUP_MESSAGE = ConstantsFk4_1.PATH_ROOT + "/Prefabs/PopupMessage4";
      ConstantsFk4.GEM_START = 150;
      ConstantsFk4.GOLD_START = 1500;
      ConstantsFk4.PATH_BORDER_ITEM = "Res/Icon/border";
      ConstantsFk4.PATH_EQUIPE_ITEM = "Res/Icon/equipIcon";
      ConstantsFk4.ITEM_ID_TACH = 5001;
      ConstantsFk4.HEALTH = "health";
      ConstantsFk4.ATTACK = "attack";
      ConstantsFk4.DEFEND = "defend";
      ConstantsFk4.SPEED = "speed";
      ConstantsFk4.COLOR_RED = "<color=red>{0}</color>";
      ConstantsFk4.COLOR_GREEN = "<color=green>{0}</color>";
      ConstantsFk4.StringFormat = function(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return str.replace(/{(\d+)}/g, function(match, index) {
          return args[index] || "";
        });
      };
      ConstantsFk4 = ConstantsFk4_1 = __decorate([ ccclass ], ConstantsFk4);
      return ConstantsFk4;
    }();
    exports.default = ConstantsFk4;
    cc._RF.pop();
  }, {} ],
  DataCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70245kmDBZOIJjBydKk2lCj", "DataCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseControler_1 = require("./BaseControler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DataCtrl = function(_super) {
      __extends(DataCtrl, _super);
      function DataCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.CONS_TST = "Hello";
        return _this;
      }
      DataCtrl.prototype.start = function() {
        this.AddEventListerner();
      };
      DataCtrl.prototype.AddEventListerner = function() {};
      DataCtrl = __decorate([ ccclass ], DataCtrl);
      return DataCtrl;
    }(BaseControler_1.BaseController);
    exports.default = DataCtrl;
    cc._RF.pop();
  }, {
    "./BaseControler": "BaseControler"
  } ],
  DataServerCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8370cE7YBE8IgqwRhWqjx9", "DataServerCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../UIFramework/UIManager");
    var Dictionary_1 = require("../Utils/Dictionary");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DataServerCtrl = function(_super) {
      __extends(DataServerCtrl, _super);
      function DataServerCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DataServerCtrl_1 = DataServerCtrl;
      DataServerCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(DataServerCtrl_1);
          this._instancle.Init();
        }
        return this._instancle;
      };
      DataServerCtrl.prototype.Init = function() {
        var _this = this;
        if (null == this.m_datas || void 0 == this.m_datas) {
          this.m_datas = new Dictionary_1.Dictionary();
          cc.loader.loadRes("Data/file.json", function(err, prefap) {
            var jsons = JSON.stringify(prefap.json);
            _this.m_datas.PareString2(jsons);
          });
        }
      };
      DataServerCtrl.prototype.GetData = function(keys) {
        null != this.m_datas && void 0 != this.m_datas || this.Init();
        console.log(this.m_datas, this.m_datas.ContainsKey(keys));
        if (!this.m_datas.ContainsKey(keys)) return null;
        try {
          return this.m_datas.GetValues(keys);
        } catch (e) {
          return null;
        }
      };
      var DataServerCtrl_1;
      DataServerCtrl = DataServerCtrl_1 = __decorate([ ccclass ], DataServerCtrl);
      return DataServerCtrl;
    }(cc.Component);
    exports.default = DataServerCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Utils/Dictionary": "Dictionary"
  } ],
  Dictionary: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbf77LQMUlEwpwDd7aMffbR", "Dictionary");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Dictionary = void 0;
    var Dictionary = function() {
      function Dictionary(capacity) {
        void 0 === capacity && (capacity = Infinity);
        this.capacity = capacity;
        this.Keys = [];
        this.Values = [];
      }
      Dictionary.prototype.Clear = function() {
        this.Keys = [];
        this.Values = [];
      };
      Dictionary.prototype.ContainsKey = function(T) {
        var index = this.Keys.indexOf(T);
        console.log(this.Keys, T);
        return index >= 0;
      };
      Dictionary.prototype.Remove = function(T) {
        var indef = this.Keys.indexOf(T);
        if (indef >= 0) {
          this.Keys.splice(indef, 1);
          this.Values.splice(indef, 1);
        }
        cc.error(indef, this.Keys);
      };
      Dictionary.prototype.TryGetValue = function(T, out) {
        var index = this.Keys.indexOf(T);
        if (index >= 0) {
          out(this.Values[index]);
          return true;
        }
        return false;
      };
      Object.defineProperty(Dictionary.prototype, "Count", {
        get: function() {
          return this.Keys.length;
        },
        enumerable: false,
        configurable: true
      });
      Dictionary.prototype.Add = function(T, B) {
        this.Keys.push(T);
        this.Values.push(B);
      };
      Dictionary.prototype.GetValues = function(T) {
        var index = this.Keys.indexOf(T);
        return index >= 0 ? this.Values[index] : null;
      };
      Dictionary.prototype.PareString = function(str) {
        var temp = JSON.parse(str);
        console.log(Object.keys(temp));
        for (var i = 0; i < temp.Keys.length; i++) {
          this.Keys.push(temp.Keys[i]);
          this.Values.push(temp.Values[i]);
        }
      };
      Dictionary.prototype.PareString2 = function(str) {
        var temp = JSON.parse(str);
        console.log(Object.keys(temp));
        var keys = Object.keys(temp);
        for (var i = 0; i < keys.length; i++) {
          this.Keys.push(keys[i]);
          this.Values.push(temp[keys[i]]);
        }
      };
      Dictionary.prototype.Change = function(T, B) {
        var index = this.Keys.indexOf(T);
        index >= 0 && (this.Values[index] = B);
      };
      return Dictionary;
    }();
    exports.Dictionary = Dictionary;
    cc._RF.pop();
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      (function(root, factory) {
        "object" === typeof exports ? module.exports = exports = factory() : "function" === typeof define && define.amd ? define([], factory) : root.CryptoJS = factory();
      })(this, function() {
        var CryptoJS = CryptoJS || function(Math, undefined) {
          var crypto;
          "undefined" !== typeof window && window.crypto && (crypto = window.crypto);
          "undefined" !== typeof self && self.crypto && (crypto = self.crypto);
          "undefined" !== typeof globalThis && globalThis.crypto && (crypto = globalThis.crypto);
          !crypto && "undefined" !== typeof window && window.msCrypto && (crypto = window.msCrypto);
          !crypto && "undefined" !== typeof global && global.crypto && (crypto = global.crypto);
          if (!crypto && "function" === typeof require) try {
            crypto = require("crypto");
          } catch (err) {}
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if ("function" === typeof crypto.getRandomValues) try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {}
              if ("function" === typeof crypto.randomBytes) try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || function() {
            function F() {}
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = function() {
            return {
              extend: function(overrides) {
                var subtype = create(this);
                overrides && subtype.mixIn(overrides);
                subtype.hasOwnProperty("init") && this.init !== subtype.init || (subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                });
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              init: function() {},
              mixIn: function(properties) {
                for (var propertyName in properties) properties.hasOwnProperty(propertyName) && (this[propertyName] = properties[propertyName]);
                properties.hasOwnProperty("toString") && (this.toString = properties.toString);
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            init: function(words, sigBytes) {
              words = this.words = words || [];
              this.sigBytes = sigBytes != undefined ? sigBytes : 4 * words.length;
            },
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              } else for (var j = 0; j < thatSigBytes; j += 4) thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              this.sigBytes += thatSigBytes;
              return this;
            },
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math.ceil(sigBytes / 4);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            random: function(nBytes) {
              var words = [];
              for (var i = 0; i < nBytes; i += 4) words.push(cryptoSecureRandomInt());
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((15 & bite).toString(16));
              }
              return hexChars.join("");
            },
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i = 0; i < hexStrLength; i += 2) words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i = 0; i < latin1StrLength; i++) words[i >>> 2] |= (255 & latin1Str.charCodeAt(i)) << 24 - i % 4 * 8;
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            _append: function(data) {
              "string" == typeof data && (data = Utf8.parse(data));
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = 4 * blockSize;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              nBlocksReady = doFlush ? Math.ceil(nBlocksReady) : Math.max((0 | nBlocksReady) - this._minBufferSize, 0);
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math.min(4 * nWordsReady, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) this._doProcessBlock(dataWords, offset);
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            finalize: function(messageUpdate) {
              messageUpdate && this._append(messageUpdate);
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 16,
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        }(Math);
        return CryptoJS;
      });
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    crypto: 1
  } ],
  3: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) T[i] = 4294967296 * Math.abs(Math.sin(i + 1)) | 0;
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = 16711935 & (M_offset_i << 8 | M_offset_i >>> 24) | 4278255360 & (M_offset_i << 24 | M_offset_i >>> 8);
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalH << 8 | nBitsTotalH >>> 24) | 4278255360 & (nBitsTotalH << 24 | nBitsTotalH >>> 8);
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalL << 8 | nBitsTotalL >>> 24) | 4278255360 & (nBitsTotalL << 24 | nBitsTotalL >>> 8);
            data.sigBytes = 4 * (dataWords.length + 1);
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = 16711935 & (H_i << 8 | H_i >>> 24) | 4278255360 & (H_i << 24 | H_i >>> 8);
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }, {
    "./core": 2
  } ],
  EffectContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51d80chGElNiYjZdsFFfThJ", "EffectContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectContainer = function(_super) {
      __extends(EffectContainer, _super);
      function EffectContainer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EffectContainer = __decorate([ ccclass ], EffectContainer);
      return EffectContainer;
    }(cc.Component);
    exports.default = EffectContainer;
    cc._RF.pop();
  }, {} ],
  EffectsGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ba766g50VP+rBGLJJvmxfK", "EffectsGroup");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AbstractEffectRendererController_1 = require("./AbstractEffectRendererController");
    var G2BattleConst_1 = require("./G2BattleConst");
    var G2BattleContext_1 = require("./G2BattleContext");
    var G2TimeCounter_1 = require("./G2TimeCounter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectsGroup = function() {
      function EffectsGroup(lstEffectInfo, lstSoundEffInfo) {
        this._listEffectRendererController = new Array();
        this._listSoundTimeCounter = new Array();
        this._isReusable = true;
        this._listSoundEffInfo = lstSoundEffInfo;
        this.LoadVisualEffects(lstEffectInfo);
      }
      EffectsGroup.prototype.LoadVisualEffects = function(lstEffectInfo) {
        var _this = this;
        this._listEffectRendererController = [];
        var tfEffectParent = G2BattleContext_1.default.Instance.TfEffectsContainer;
        lstEffectInfo.forEach(function(effInfo) {
          try {
            var effRendererController = AbstractEffectRendererController_1.AbstractEffectRendererController.GenEffectController(tfEffectParent, effInfo);
            null != effRendererController && _this._listEffectRendererController.push(effRendererController);
          } catch (e) {}
        });
      };
      EffectsGroup.prototype.DestroyGroupEffect = function() {
        this._listEffectRendererController.forEach(function(erc) {
          erc.DestroyEffect();
        });
      };
      EffectsGroup.prototype.IsResuable = function() {
        return this._isReusable;
      };
      EffectsGroup.prototype.PlayGroupEffect = function(orderLayerBase, customScale, position, direction) {
        var _this = this;
        this._isReusable = false;
        this._counterResetCoolDown = new G2TimeCounter_1.default(G2BattleConst_1.default.TIME_AFTER_CACHING_EFFECT_GROUP, function() {
          _this._isReusable = true;
        });
        this._listEffectRendererController.forEach(function(erc) {
          erc.UpdateEffect(orderLayerBase, customScale, position, direction);
          erc.PlayEffect();
        });
        this._listSoundEffInfo.forEach(function(sei) {
          var timeCounterSound = new G2TimeCounter_1.default(sei.m_DelayStart, function() {
            G2BattleContext_1.default.Instance.SoundPlayer.PlaySound(sei.m_PathSound);
          });
          _this._listSoundTimeCounter.push(timeCounterSound);
        });
      };
      EffectsGroup.prototype.Ticks = function(deltaTime) {
        var _a;
        null === (_a = this._counterResetCoolDown) || void 0 === _a ? void 0 : _a.Ticks(deltaTime);
        this._listEffectRendererController.forEach(function(erc) {
          erc.Ticks(deltaTime);
        });
        if (null != this._listSoundTimeCounter) {
          var countTimeSound = this._listSoundTimeCounter.length;
          for (var i = countTimeSound - 1; i >= 0; i--) {
            this._listSoundTimeCounter[i].Ticks(deltaTime);
            this._listSoundTimeCounter[i].IsDone() && this._listSoundTimeCounter.splice(i, 1);
          }
        }
      };
      EffectsGroup = __decorate([ ccclass ], EffectsGroup);
      return EffectsGroup;
    }();
    exports.default = EffectsGroup;
    cc._RF.pop();
  }, {
    "./AbstractEffectRendererController": "AbstractEffectRendererController",
    "./G2BattleConst": "G2BattleConst",
    "./G2BattleContext": "G2BattleContext",
    "./G2TimeCounter": "G2TimeCounter"
  } ],
  EquiItemBag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3e0dMAI8tKeLui6XKrxrKE", "EquiItemBag");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EquiItemBag = function(_super) {
      __extends(EquiItemBag, _super);
      function EquiItemBag() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      EquiItemBag.prototype.start = function() {};
      __decorate([ property(cc.Label) ], EquiItemBag.prototype, "label", void 0);
      __decorate([ property ], EquiItemBag.prototype, "text", void 0);
      EquiItemBag = __decorate([ ccclass ], EquiItemBag);
      return EquiItemBag;
    }(cc.Component);
    exports.default = EquiItemBag;
    cc._RF.pop();
  }, {} ],
  EquipItemView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35d64yHbSlAVrOWuRt6g3dU", "EquipItemView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ItemDrag_1 = require("./dragandrop/ItemDrag");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EquipItemView = function(_super) {
      __extends(EquipItemView, _super);
      function EquipItemView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EquipItemView.prototype.start = function() {};
      EquipItemView.prototype.onCollisionStay = function(other, self) {
        console.log("stay", self.node.name);
        other.node.getComponent(ItemDrag_1.default).nodeCheck = this.node;
        this._localColider = self.node;
      };
      EquipItemView.prototype.onCollisionExit = function(other, self) {
        console.log("exit");
        other.node.getComponent(ItemDrag_1.default).nodeCheck = null;
      };
      __decorate([ property(cc.Sprite) ], EquipItemView.prototype, "border", void 0);
      __decorate([ property(cc.Sprite) ], EquipItemView.prototype, "icon", void 0);
      __decorate([ property(cc.Node) ], EquipItemView.prototype, "icon_none", void 0);
      EquipItemView = __decorate([ ccclass ], EquipItemView);
      return EquipItemView;
    }(cc.Component);
    exports.default = EquipItemView;
    cc._RF.pop();
  }, {
    "./dragandrop/ItemDrag": "ItemDrag"
  } ],
  G2BattleConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bd04Z1FfhKw5Q8I3ho5SgB", "G2BattleConst");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G2BattleConst = function() {
      function G2BattleConst() {}
      G2BattleConst.TIME_AFTER_CACHING_EFFECT_GROUP = 3;
      G2BattleConst = __decorate([ ccclass ], G2BattleConst);
      return G2BattleConst;
    }();
    exports.default = G2BattleConst;
    cc._RF.pop();
  }, {} ],
  G2BattleContext: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92aeb3U8K5EsrspHkDoEnZ9", "G2BattleContext");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G2BattleContext = function() {
      function G2BattleContext() {}
      G2BattleContext_1 = G2BattleContext;
      Object.defineProperty(G2BattleContext, "Instance", {
        get: function() {
          null == this._instance && (this._instance = new G2BattleContext_1());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      var G2BattleContext_1;
      G2BattleContext = G2BattleContext_1 = __decorate([ ccclass ], G2BattleContext);
      return G2BattleContext;
    }();
    exports.default = G2BattleContext;
    cc._RF.pop();
  }, {} ],
  G2Interface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b2b4lVOUpM4ZCOiirGm43m", "G2Interface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  G2SoundEffectInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cfb3y391RDi4zzqkDPLOEo", "G2SoundEffectInfo");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G2SoundEffectInfo = function() {
      function G2SoundEffectInfo(pathSound) {
        this.m_PathSound = "";
        this.m_DelayStart = 0;
        this.m_PathSound = pathSound;
      }
      G2SoundEffectInfo.prototype.SetDelayStart = function(delay) {
        this.m_DelayStart = delay;
        return this;
      };
      G2SoundEffectInfo = __decorate([ ccclass ], G2SoundEffectInfo);
      return G2SoundEffectInfo;
    }();
    exports.default = G2SoundEffectInfo;
    cc._RF.pop();
  }, {} ],
  G2TimeCounter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fa8dzA/L5KwrLCzGuDy54A", "G2TimeCounter");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G2TimeCounter = function() {
      function G2TimeCounter(duration, triggerAction) {
        this.m_Duration = 1;
        this._counter = 0;
        this._timeIsUp = false;
        this.m_Duration = duration;
        this.m_TriggerAction = triggerAction;
        this._timeIsUp = true;
        this.StartCounter();
      }
      G2TimeCounter.prototype.StartCounter = function() {
        this._timeIsUp = false;
        this._counter = 0;
      };
      G2TimeCounter.prototype.IsDone = function() {
        return this._timeIsUp;
      };
      G2TimeCounter.prototype.Ticks = function(deltaTime) {
        if (this._timeIsUp) return;
        this._counter += deltaTime;
        if (this._counter > this.m_Duration) {
          this.m_TriggerAction();
          this._timeIsUp = true;
        }
      };
      G2TimeCounter = __decorate([ ccclass ], G2TimeCounter);
      return G2TimeCounter;
    }();
    exports.default = G2TimeCounter;
    cc._RF.pop();
  }, {} ],
  GameDirection: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5397eyQ1VlBM6nVeHqkGdV8", "GameDirection");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameDirection = void 0;
    var GameDirection;
    (function(GameDirection) {
      GameDirection[GameDirection["RIGHT"] = 1] = "RIGHT";
      GameDirection[GameDirection["LEFT"] = 2] = "LEFT";
    })(GameDirection = exports.GameDirection || (exports.GameDirection = {}));
    cc._RF.pop();
  }, {} ],
  GameHelp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf0b5AbFlBOUY5xyIc8HVfS", "GameHelp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UnityHelper = exports.GameHelp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var md5_1 = require("crypto-js/md5");
    var GameHelp = function() {
      function GameHelp() {}
      GameHelp.getObjectScreenByName = function(nName) {
        var result = this.getChildNode(cc.director.getScene(), nName);
        return result;
      };
      GameHelp.getChildNode = function(root, n_name) {
        if (root.name == n_name) return root;
        for (var i = 0; i < root.children.length; i++) {
          var res = this.getChildNode(root.children[i], n_name);
          if (res) return res;
        }
      };
      GameHelp.Md5 = function(str) {
        var result = "";
        return md5_1.default(str).toString();
      };
      return GameHelp;
    }();
    exports.GameHelp = GameHelp;
    var UnityHelper = function(_super) {
      __extends(UnityHelper, _super);
      function UnityHelper() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UnityHelper.FindTheChildNode = function(root, n_name) {
        if (root.name == n_name) return root;
        for (var i = 0; i < root.children.length; i++) {
          var res = this.FindTheChildNode(root.children[i], n_name);
          if (res) return res;
        }
      };
      UnityHelper.GetTheChildNodeComponentScript = function(goParent, childName, component) {
        var searchTranformNode = null;
        searchTranformNode = this.FindTheChildNode(goParent, childName);
        return null != searchTranformNode ? searchTranformNode.getComponent(component) : null;
      };
      UnityHelper.AddChildNodeComponent = function(goParent, childName, component) {
        var searchTransform = null;
        searchTransform = this.FindTheChildNode(goParent, childName);
        if (null != searchTransform) {
          var componentScriptsArray = searchTransform.getComponents(component);
          for (var i = 0; i < componentScriptsArray.length; i++) null != componentScriptsArray[i] && componentScriptsArray[i]._destroyImmediate();
          return searchTransform.addComponent(component);
        }
        return null;
      };
      UnityHelper.AddChildNodeToParentNode = function(parent, child) {
        child.parent = parent;
        child.setPosition(cc.Vec2.ZERO);
        child.setRotation(0);
        child.setScale(1, 1);
      };
      UnityHelper.findAll = function(source, dk) {
        if (null == source || void 0 == source) return null;
        var result = new Array();
        for (var i = 0; i < source.length; i++) dk(source[i]) && result.push(source[i]);
        return result;
      };
      UnityHelper = __decorate([ ccclass ], UnityHelper);
      return UnityHelper;
    }(cc.Component);
    exports.UnityHelper = UnityHelper;
    cc._RF.pop();
  }, {
    "crypto-js/md5": 3
  } ],
  GameLaucher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7a92lAr6RNoqWmqXEO2bGm", "GameLaucher");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameLaucher = function(_super) {
      __extends(GameLaucher, _super);
      function GameLaucher() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameLaucher.prototype.onLoad = function() {};
      GameLaucher.prototype.start = function() {
        cc.loader.loadRes("Prefabs/mroot", function(err, prefab) {
          this.m_root = cc.instantiate(prefab);
          cc.director.getScene().addChild(this.m_root);
        });
        cc.loader.loadRes("Prefabs/loadding", function(err, prefab) {
          this.m_loadding = cc.instantiate(prefab);
          var canvas = this.m_root.getChildByName("Canvas");
          cc.director.getScene().addChild(this.m_loadding);
          this.m_loadding.parrent = canvas;
          this.m_loadding.setPosition(667, 375);
          console.log(this.m_loadding.parrent);
          this.m_loadding.getComponent("TapPanelLoading4").HideLoading();
        });
      };
      __decorate([ property(cc.Node) ], GameLaucher.prototype, "m_root", void 0);
      __decorate([ property(cc.Camera) ], GameLaucher.prototype, "m_camera", void 0);
      GameLaucher = __decorate([ ccclass ], GameLaucher);
      return GameLaucher;
    }(cc.Component);
    exports.default = GameLaucher;
    cc._RF.pop();
  }, {} ],
  GameStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4747bpIaJBJUK4Seh3szp9L", "GameStart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../UIFramework/BaseUIForm");
    var ConstDefine_1 = require("./ConstDefine");
    var DataCtrl_1 = require("./Controller/DataCtrl");
    var StageRoadCtrl_1 = require("./Controller/StageRoadCtrl");
    var TapGameData4Ctrl_1 = require("./Controller/TapGameData4Ctrl");
    var DataServerCtrl_1 = require("./ctrl/DataServerCtrl");
    var QuestCtrl_1 = require("./ctrl/QuestCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameStart = function(_super) {
      __extends(GameStart, _super);
      function GameStart() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameStart.prototype.start = function() {
        cc.debug.setDisplayStats(false);
        this.OpenUIform(ConstDefine_1.default.WELLCOME_SCREEN);
        this.GameLoop();
        console.log(DataCtrl_1.default.GetInstance().CONS_TST);
        cc.director.getCollisionManager().enabled = true;
      };
      GameStart.prototype.GameLoop = function() {
        return __awaiter(this, void 0, void 0, function() {
          var res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              console.log("\u2026TestAsync\u2026");
              return [ 4, cc.loader.loadRes("UIFormsConfigInfo.json", function(err, prefap) {
                res = prefap;
                console.log(res);
              }) ];

             case 1:
              _a.sent();
              TapGameData4Ctrl_1.default.GetInstance().init();
              DataServerCtrl_1.default.getInstancle().Init();
              QuestCtrl_1.QuestCtrl.getInstancle();
              this.scheduleOnce(StageRoadCtrl_1.StageRoadCtrl.getInstancle, 1);
              console.log(res);
              return [ 2 ];
            }
          });
        });
      };
      GameStart = __decorate([ ccclass ], GameStart);
      return GameStart;
    }(BaseUIForm_1.default);
    exports.default = GameStart;
    cc._RF.pop();
  }, {
    "../UIFramework/BaseUIForm": "BaseUIForm",
    "./ConstDefine": "ConstDefine",
    "./Controller/DataCtrl": "DataCtrl",
    "./Controller/StageRoadCtrl": "StageRoadCtrl",
    "./Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "./ctrl/DataServerCtrl": "DataServerCtrl",
    "./ctrl/QuestCtrl": "QuestCtrl"
  } ],
  HashTable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f95e+GAk5EV5/Qx9PE8ux2", "HashTable");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  HeroCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "071e3MRakNB0LgvhHLFD8Ej", "HeroCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../UIFramework/UIManager");
    var TapGameData4Ctrl_1 = require("../Controller/TapGameData4Ctrl");
    var Dictionary_1 = require("../Utils/Dictionary");
    var ConstantsFk4_1 = require("./ConstantsFk4");
    var ItemsCtrl_1 = require("./ItemsCtrl");
    var QuestCtrl_1 = require("./QuestCtrl");
    var TapSavingData4_1 = require("./TapSavingData4");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HeroCtrl = function(_super) {
      __extends(HeroCtrl, _super);
      function HeroCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_idHeroSellect = 0;
        return _this;
      }
      HeroCtrl_1 = HeroCtrl;
      HeroCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(HeroCtrl_1);
        }
        return this._instancle;
      };
      Object.defineProperty(HeroCtrl.prototype, "heroId", {
        get: function() {
          if (null == this.m_HeroId) {
            this.m_HeroId = new Array();
            this.m_HeroId.push(TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo().m_HeroKey);
            for (var i = 10002; i < 10006; i++) this.m_HeroId.push(i);
          }
          console.error("----", this.m_HeroId);
          return this.m_HeroId;
        },
        enumerable: false,
        configurable: true
      });
      HeroCtrl.prototype.indexHeroById = function(value) {
        return this.heroId.indexOf(value);
      };
      Object.defineProperty(HeroCtrl.prototype, "heroLevel", {
        get: function() {
          this.m_heroLevels = TapSavingData4_1.default.getLevelHero();
          console.error("-----------------heroLevel", this.m_heroLevels);
          if (null == this.m_heroLevels || void 0 == this.m_heroLevels.GetValues(0)) {
            this.m_heroLevels = new Dictionary_1.Dictionary();
            this.m_heroLevels.Add(0, 1);
            this.m_heroLevels.Add(1, 0);
            this.m_heroLevels.Add(2, 0);
            this.m_heroLevels.Add(3, 0);
            this.m_heroLevels.Add(4, 0);
            TapSavingData4_1.default.setLevelHerro();
          }
          return this.m_heroLevels;
        },
        enumerable: false,
        configurable: true
      });
      HeroCtrl.prototype.GetHeroLeadLevel = function() {
        console.log("GetHeroLeadLevel", this.heroLevel.GetValues(0));
        return this.heroLevel.GetValues(0);
      };
      HeroCtrl.prototype.UpdateLevelHero = function(heroId, level) {
        console.error("1UpdateLevelHero", heroId, level);
        if (this.m_heroLevels.ContainsKey(heroId)) {
          this.m_heroLevels.Change(heroId, level);
          TapSavingData4_1.default.setLevelHerro();
        }
        level - 1 == 0 && TapSavingData4_1.default.UnlockASidekick(this.heroId[heroId]);
        QuestCtrl_1.QuestCtrl.getInstancle().updateHandle();
        this.updateLucChien();
      };
      HeroCtrl.prototype.GetLevelHeroById = function(heroId) {
        console.log(this.m_heroLevels);
        if (null == this.m_heroLevels) return 0;
        return this.m_heroLevels.ContainsKey(heroId) ? this.m_heroLevels.GetValues(heroId) : 0;
      };
      HeroCtrl.prototype.updateLucChien = function() {
        var rank = 0;
        for (var i = 0; i < 4; i++) {
          var level = 0 == i ? HeroCtrl_1.getInstancle().GetHeroLeadLevel() : HeroCtrl_1.getInstancle().GetLevelHeroById(i);
          var heroInfo = 0 == i ? TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo() : TapGameData4Ctrl_1.default.GetInstance().GetHeroSidekickInfo(HeroCtrl_1.getInstancle().heroId[i]);
          var itembounus = ItemsCtrl_1.ItemsCtrl.getInstancle().GetValueBonusItem(i);
          console.log("itembounus", itembounus);
          if (level > 0) {
            rank += heroInfo.CalculateHpPoint(level) + (void 0 != itembounus && itembounus.ContainsKey(ConstantsFk4_1.default.HEALTH) ? itembounus[ConstantsFk4_1.default.HEALTH] : 0);
            rank += heroInfo.CalculateHealingPoint(level) + (void 0 != itembounus && itembounus.ContainsKey(ConstantsFk4_1.default.DEFEND) ? itembounus[ConstantsFk4_1.default.DEFEND] : 0);
            rank += heroInfo.CalculateAttackPoint(level) + (void 0 != itembounus && itembounus.ContainsKey(ConstantsFk4_1.default.ATTACK) ? itembounus[ConstantsFk4_1.default.ATTACK] : 0);
            rank += heroInfo.CalculateSpeedPoint(level) + (void 0 != itembounus && itembounus.ContainsKey(ConstantsFk4_1.default.SPEED) ? itembounus[ConstantsFk4_1.default.SPEED] : 0);
          }
        }
        null != this.m_lblRank && (this.m_lblRank.getComponent(cc.Label).string = rank + "");
        null != this.m_lblLevel && (this.m_lblLevel.getComponent(cc.Label).string = HeroCtrl_1.getInstancle().GetHeroLeadLevel() + "");
      };
      HeroCtrl.prototype.start = function() {};
      var HeroCtrl_1;
      HeroCtrl = HeroCtrl_1 = __decorate([ ccclass ], HeroCtrl);
      return HeroCtrl;
    }(cc.Component);
    exports.default = HeroCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "../Utils/Dictionary": "Dictionary",
    "./ConstantsFk4": "ConstantsFk4",
    "./ItemsCtrl": "ItemsCtrl",
    "./QuestCtrl": "QuestCtrl",
    "./TapSavingData4": "TapSavingData4"
  } ],
  HeroType4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b21cf6jxeVK65GrWZp4OEPw", "HeroType4");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HeroType4 = void 0;
    var HeroType4;
    (function(HeroType4) {
      HeroType4[HeroType4["LEAD"] = 0] = "LEAD";
      HeroType4[HeroType4["SIDEKICK"] = 1] = "SIDEKICK";
      HeroType4[HeroType4["ENEMY"] = 2] = "ENEMY";
    })(HeroType4 = exports.HeroType4 || (exports.HeroType4 = {}));
    cc._RF.pop();
  }, {} ],
  IDictionary: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef9bc6/Bn9AJK85vWOjTm2r", "IDictionary");
    cc._RF.pop();
  }, {} ],
  IdelScreenCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6dccb3+LEFDIrCbRkAyctPQ", "IdelScreenCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../UIFramework/UIManager");
    var ConstDefine_1 = require("../ConstDefine");
    var BaseControler_1 = require("./BaseControler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var IdelScreenCtrl = function(_super) {
      __extends(IdelScreenCtrl, _super);
      function IdelScreenCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      IdelScreenCtrl.prototype.Enter = function() {
        _super.prototype.Enter.call(this);
        UIManager_1.default.GetInstance().ShowUIForms(ConstDefine_1.default.IDLE_SCREEN);
        this.schedule(function() {
          UIManager_1.default.GetInstance().CloseOrReturnUIForms(ConstDefine_1.default.LOADDING);
        }, 2, 0, 0);
      };
      IdelScreenCtrl.prototype.AddEventListerner = function() {};
      IdelScreenCtrl = __decorate([ ccclass ], IdelScreenCtrl);
      return IdelScreenCtrl;
    }(BaseControler_1.BaseController);
    exports.default = IdelScreenCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../ConstDefine": "ConstDefine",
    "./BaseControler": "BaseControler"
  } ],
  ItemCombieModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3cc1NKJ5dDDp72aB9r7JCc", "ItemCombieModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemCombieModel = void 0;
    var ItemCombieModel = function() {
      function ItemCombieModel() {}
      return ItemCombieModel;
    }();
    exports.ItemCombieModel = ItemCombieModel;
    cc._RF.pop();
  }, {} ],
  ItemDrag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a3288qc6ZOLrQGeEsFi381", "ItemDrag");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../../UIFramework/UIManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemDrag = function(_super) {
      __extends(ItemDrag, _super);
      function ItemDrag() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mouseDown = false;
        return _this;
      }
      Object.defineProperty(ItemDrag.prototype, "nodeCheck", {
        set: function(value) {
          this._nodeCheck = value;
        },
        enumerable: false,
        configurable: true
      });
      ItemDrag.prototype.start = function() {
        this.localpostion = this.node.getPosition();
      };
      ItemDrag.prototype.onLoad = function() {
        var _this = this;
        this.mouseDown = false;
        this._localParent = this.node.parent;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this.mouseDown = true;
          _this.node.parent = UIManager_1.default.GetInstance().Normal;
          var vec = UIManager_1.default.GetInstance().Normal.convertToNodeSpace(event.getLocation());
          _this.node.x = vec.x;
          _this.node.y = vec.y;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (!_this.mouseDown) return;
          var vec = UIManager_1.default.GetInstance().Normal.convertToNodeSpace(event.getLocation());
          _this.node.x = vec.x;
          _this.node.y = vec.y;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          console.log("END", _this.nodeCheck);
          if (null == _this._nodeCheck || void 0 == _this._nodeCheck) {
            _this.mouseDown = false;
            _this.node.parent = _this._localParent;
            _this.resetLayout();
          } else {
            _this.node.parent = _this._nodeCheck.parent;
            _this.node.setPosition(_this._nodeCheck.getPosition());
          }
        }, this);
      };
      ItemDrag.prototype.resetLayout = function() {
        this.node.setPosition(this.localpostion.x, this.localpostion.y);
      };
      __decorate([ property(cc.Node) ], ItemDrag.prototype, "dropZone", void 0);
      ItemDrag = __decorate([ ccclass ], ItemDrag);
      return ItemDrag;
    }(cc.Component);
    exports.default = ItemDrag;
    cc._RF.pop();
  }, {
    "../../../UIFramework/UIManager": "UIManager"
  } ],
  ItemIconSkill: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20c280jUBdB44YfAgRFzymH", "ItemIconSkill");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemIconSkill = function(_super) {
      __extends(ItemIconSkill, _super);
      function ItemIconSkill() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        return _this;
      }
      ItemIconSkill.prototype.start = function() {};
      ItemIconSkill.prototype.show = function(data, index) {
        var _this = this;
        this.m_data = data;
        this.m_index = index;
        this.mLablelName.string = this.m_data.m_Desc;
        cc.loader.loadRes("Icon/skill/" + this.m_data.m_icon, cc.SpriteFrame, function(err, prefab) {
          _this.icon.spriteFrame = prefab;
        });
      };
      __decorate([ property(cc.Sprite) ], ItemIconSkill.prototype, "icon", void 0);
      __decorate([ property(cc.Label) ], ItemIconSkill.prototype, "mLablelName", void 0);
      ItemIconSkill = __decorate([ ccclass ], ItemIconSkill);
      return ItemIconSkill;
    }(cc.Component);
    exports.default = ItemIconSkill;
    cc._RF.pop();
  }, {} ],
  ItemUserModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78a7386BaRDxrNfKVGPBput", "ItemUserModel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemUserModel = exports.ItemModel = void 0;
    var ItemModel = function() {
      function ItemModel() {}
      return ItemModel;
    }();
    exports.ItemModel = ItemModel;
    var ItemUserModel = function(_super) {
      __extends(ItemUserModel, _super);
      function ItemUserModel(itemModel) {
        var _this = _super.call(this) || this;
        _this.heroUse = -1;
        _this.id = itemModel.id;
        _this.name = itemModel.name;
        _this.icon = itemModel.icon;
        _this.level = itemModel.level;
        _this.attack = itemModel.attack;
        _this.health = itemModel.health;
        _this.defends = itemModel.defends;
        _this.speeds = itemModel.speeds;
        _this.type = itemModel.type;
        _this.position = itemModel.position;
        _this.descretion = itemModel.descretion;
        _this.slTach = itemModel.slTach;
        return _this;
      }
      return ItemUserModel;
    }(ItemModel);
    exports.ItemUserModel = ItemUserModel;
    cc._RF.pop();
  }, {} ],
  ItemsCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78af5qMiM9KMYm9sktW8c2M", "ItemsCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValueBonus = exports.ItemsCtrl = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var ItemUserModel_1 = require("../Model/ItemUserModel");
    var Dictionary_1 = require("../Utils/Dictionary");
    var GameHelp_1 = require("../Utils/GameHelp");
    var ConstantsFk4_1 = require("./ConstantsFk4");
    var DataServerCtrl_1 = require("./DataServerCtrl");
    var HeroCtrl_1 = require("./HeroCtrl");
    var TapSavingData4_1 = require("./TapSavingData4");
    var ItemsCtrl = function(_super) {
      __extends(ItemsCtrl, _super);
      function ItemsCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ItemsCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(ItemsCtrl);
        }
        return this._instancle;
      };
      ItemsCtrl.prototype.Init = function() {
        this.m_itemUser = TapSavingData4_1.default.getItemUser();
        this.m_allItems = DataServerCtrl_1.default.getInstancle().GetData("items");
        console.log(this.m_itemUser.length);
        this.m_itemCanDrop = GameHelp_1.UnityHelper.findAll(this.m_allItems, function(x) {
          return 1 == x.level || 2 == x.level;
        });
      };
      ItemsCtrl.prototype.getAllItemUser = function() {
        console.log(this.m_itemUser);
        return GameHelp_1.UnityHelper.findAll(this.m_itemUser, function(x) {
          return -1 == x.heroUse;
        });
      };
      ItemsCtrl.prototype.getItemEquipUser = function() {
        console.log(JSON.stringify(this.m_allItems));
        return GameHelp_1.UnityHelper.findAll(this.m_itemUser, function(x) {
          return 1 == x.type && -1 == x.heroUse;
        });
      };
      ItemsCtrl.prototype.getAllItemNormalUser = function() {
        return GameHelp_1.UnityHelper.findAll(this.m_itemUser, function(x) {
          return 1 != x.type;
        });
      };
      ItemsCtrl.prototype.addItem = function(id, sl) {
        void 0 === sl && (sl = 1);
        null == this.m_itemUser && (this.m_itemUser = new Array());
        if (null != this.m_allItems.find(function(x) {
          return x.id == id;
        }) && 2 == this.m_allItems.find(function(x) {
          return x.id == id;
        }).type) {
          var item = new ItemUserModel_1.ItemUserModel(this.m_allItems.find(function(x) {
            return x.id == id;
          }));
          var element_1 = null;
          this.m_itemUser.forEach(function(elmt) {
            elmt.id == id && (element_1 = elmt);
          });
          var idx = this.m_itemUser.indexOf(element_1);
          if (idx >= 0) {
            console.log(sl);
            this.m_itemUser[idx].count += sl;
          } else {
            item.idItem = this.randomItemID();
            item.count = sl;
            this.m_itemUser.push(item);
          }
        } else for (var i = 0; i < sl; i++) {
          var item = new ItemUserModel_1.ItemUserModel(this.m_allItems.find(function(x) {
            return x.id == id;
          }));
          item.idItem = this.randomItemID();
          item.count = 1;
          this.m_itemUser.push(item);
        }
        TapSavingData4_1.default.saveItemUser();
      };
      ItemsCtrl.prototype.useItem = function(id, idHeros) {};
      ItemsCtrl.prototype.randomItemID = function() {
        var dt = Date.now();
        var result = dt + cc.randomRangeInt(0, 9999).toString();
        var md5Result = GameHelp_1.GameHelp.Md5(result);
        return md5Result;
      };
      ItemsCtrl.prototype.TachItem = function(_iditem) {
        var mItem = this.m_itemUser.find(function(x) {
          return x.idItem == _iditem;
        });
        if (null != mItem && 1 == mItem.type) {
          this.removeItem(_iditem);
          console.log("soluong tach: " + this.m_allItems.find(function(x) {
            return x.id == mItem.id;
          }).slTach);
          this.addItem(ConstantsFk4_1.default.ITEM_ID_TACH, this.m_allItems.find(function(x) {
            return x.id == mItem.id;
          }).slTach);
        }
        null != this.m_onReloadItem && this.m_onReloadItem();
      };
      ItemsCtrl.prototype.removeItem = function(_itemId) {
        var index = this.m_itemUser.findIndex(function(x) {
          return x.idItem == _itemId;
        });
        index >= 0 && delete this.m_itemUser[index];
      };
      ItemsCtrl.prototype.getItemUserUse = function(mId) {
        var items = GameHelp_1.UnityHelper.findAll(this.m_itemUser, function(x) {
          return x.heroUse == mId;
        });
        var result = new Dictionary_1.Dictionary();
        items.forEach(function(itm) {
          result.ContainsKey(itm.position) || result.Add(itm.position, itm);
        });
        return result;
      };
      ItemsCtrl.prototype.getItemInSlot = function(idHero, slot) {
        var itm = this.m_itemUser.find(function(x) {
          return x.heroUse == idHero && x.position == slot;
        });
        return itm;
      };
      ItemsCtrl.prototype.Chetao = function(m_data) {
        var _a;
        if (m_data.diamon > TapSavingData4_1.default.GetPlayerGem()) return;
        var c = this.m_itemUser.find(function(x) {
          return 5001 == x.id;
        });
        console.log("Chetao" + c.count);
        if (null == c || c.count < m_data.slGop) return;
        var item = new ItemUserModel_1.ItemUserModel(this.m_allItems.find(function(x) {
          return x.id == m_data.id;
        }));
        item.idItem = this.randomItemID();
        m_data.attack[0] > 0 && m_data.attack[1] > 0 ? item.attack = cc.randomRangeInt(m_data.attack[0], m_data.attack[1]) : item.attack = 0;
        m_data.defends[0] > 0 && m_data.defends[1] > 0 ? item.defends = cc.randomRangeInt(m_data.defends[0], m_data.defends[1]) : item.defends = 0;
        m_data.health[0] > 0 && m_data.health[1] > 0 ? item.health = cc.randomRangeInt(m_data.health[0], m_data.health[1]) : item.health = 0;
        m_data.speed[0] > 0 && m_data.speed[1] > 0 ? item.speeds = cc.randomRangeInt(m_data.speed[0], m_data.speed[1]) : item.speeds = 0;
        item.count = 1;
        this.m_itemUser.push(item);
        TapSavingData4_1.default.GemChange(-m_data.diamon);
        this.sudungItem(5001, m_data.slGop);
        null === (_a = this.m_onReloadItem) || void 0 === _a ? void 0 : _a.call(this);
      };
      ItemsCtrl.prototype.sudungItem = function(id, sl) {
        var idx = this.m_itemUser.findIndex(function(x) {
          return x.id == id;
        });
        this.m_itemUser[idx].count -= sl;
        0 == this.m_itemUser[idx].count && delete this.m_itemUser[idx];
        TapSavingData4_1.default.saveItemUser();
      };
      ItemsCtrl.prototype.getItemNoneUserInSlot = function(slot) {
        var m_result = new Array();
        this.m_itemUser.forEach(function(itm) {
          1 == itm.type && itm.position == slot && -1 == itm.heroUse && m_result.push(itm);
        });
        return m_result;
      };
      ItemsCtrl.prototype.MacTrangbi = function(_clienItem, userHero) {
        var _a;
        var idx = this.m_itemUser.findIndex(function(x) {
          return x.idItem == _clienItem;
        });
        if (idx >= 0) {
          var md_1 = this.slotIsNull(userHero, this.m_itemUser[idx].position);
          if (null == md_1) this.m_itemUser[idx].heroUse = userHero; else {
            this.m_itemUser.find(function(x) {
              return x.idItem == md_1.idItem;
            }).heroUse = -1;
            this.m_itemUser[idx].heroUse = userHero;
          }
          null === (_a = this.m_onReloadItem) || void 0 === _a ? void 0 : _a.call(this);
          TapSavingData4_1.default.saveItemUser();
          HeroCtrl_1.default.getInstancle().updateLucChien();
        }
      };
      ItemsCtrl.prototype.GoItem = function(_clientItem) {
        var _a;
        var idx = this.m_itemUser.findIndex(function(x) {
          return x.idItem == _clientItem;
        });
        if (idx >= 0) {
          this.m_itemUser[idx].heroUse = -1;
          null === (_a = this.m_onReloadItem) || void 0 === _a ? void 0 : _a.call(this);
          TapSavingData4_1.default.saveItemUser();
          HeroCtrl_1.default.getInstancle().updateLucChien();
        }
      };
      ItemsCtrl.prototype.DoiTrangBi = function(clientDoi, clientMac, useId) {
        var _a;
        var idx = this.m_itemUser.findIndex(function(x) {
          return x.idItem == clientDoi;
        });
        idx >= 0 && (this.m_itemUser[idx].heroUse = -1);
        this.MacTrangbi(clientMac, useId);
        null === (_a = this.m_onReloadItem) || void 0 === _a ? void 0 : _a.call(this);
      };
      ItemsCtrl.prototype.slotIsNull = function(heroId, slot) {
        var res = this.getItemUserUse(heroId);
        return res.ContainsKey(slot) ? res[slot] : null;
      };
      ItemsCtrl.prototype.GetValueBonusItem = function(idHeros) {
        var result = new Array();
        var tempValue = new Dictionary_1.Dictionary();
        var itemUser = GameHelp_1.UnityHelper.findAll(this.m_itemUser, function(x) {
          return x.heroUse == idHeros;
        });
        if (null == itemUser || void 0 == itemUser) return;
        itemUser.forEach(function(md) {
          md.attack > 0 && (tempValue.ContainsKey(ConstantsFk4_1.default.ATTACK) ? tempValue[ConstantsFk4_1.default.ATTACK] += md.attack : tempValue.Add(ConstantsFk4_1.default.ATTACK, md.attack));
          md.health > 0 && (tempValue.ContainsKey(ConstantsFk4_1.default.HEALTH) ? tempValue[ConstantsFk4_1.default.HEALTH] += md.health : tempValue.Add(ConstantsFk4_1.default.HEALTH, md.health));
          md.speeds > 0 && (tempValue.ContainsKey(ConstantsFk4_1.default.SPEED) ? tempValue[ConstantsFk4_1.default.SPEED] += md.speeds : tempValue.Add(ConstantsFk4_1.default.SPEED, md.speeds));
          md.defends > 0 && (tempValue.ContainsKey(ConstantsFk4_1.default.DEFEND) ? tempValue[ConstantsFk4_1.default.DEFEND] += md.defends : tempValue.Add(ConstantsFk4_1.default.DEFEND, md.defends));
        });
        return tempValue;
      };
      ItemsCtrl.prototype.getRandomDrop = function() {
        var n = cc.randomRangeInt(0, this.m_itemCanDrop.length);
        return this.m_itemCanDrop[n];
      };
      return ItemsCtrl;
    }(cc.Component);
    exports.ItemsCtrl = ItemsCtrl;
    var ValueBonus = function() {
      function ValueBonus() {}
      return ValueBonus;
    }();
    exports.ValueBonus = ValueBonus;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Model/ItemUserModel": "ItemUserModel",
    "../Utils/Dictionary": "Dictionary",
    "../Utils/GameHelp": "GameHelp",
    "./ConstantsFk4": "ConstantsFk4",
    "./DataServerCtrl": "DataServerCtrl",
    "./HeroCtrl": "HeroCtrl",
    "./TapSavingData4": "TapSavingData4"
  } ],
  Loadding: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a96b7K9KP1A4YVau11kUl5p", "Loadding");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../UIFramework/BaseUIForm");
    var ActionTimer_1 = require("./Utils/ActionTimer");
    var ShareCode_1 = require("./Utils/ShareCode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._countLoading = 0;
        return _this;
      }
      Loading.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Fixed;
        console.error("onLoad", this.CurrentUIType.UIForm_Type);
      };
      Loading.prototype.start = function() {
        var _this = this;
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Fixed;
        this._repeatCountLoading = new ActionTimer_1.default(.3, function() {
          _this._countLoading++;
          _this._countLoading > 3 && (_this._countLoading = 0);
          0 == _this._countLoading ? _this.m_TextLoading.string = "Loading" : 1 == _this._countLoading ? _this.m_TextLoading.string = "Loading." : 2 == _this._countLoading ? _this.m_TextLoading.string = "Loading.." : _this.m_TextLoading.string = "Loading...";
        });
      };
      Loading.prototype.ShowLoading = function(timeWait) {
        var _this = this;
        this.m_LoadingContent.active = true;
        new ShareCode_1.default(this, function() {
          _this.m_LoadingContent.active = false;
        }, timeWait).doIt();
      };
      Loading.prototype.HideLoading = function() {
        this.m_LoadingContent.active = false;
      };
      Loading.prototype.update = function(dt) {
        this._repeatCountLoading.UpdateTimmer(dt);
      };
      __decorate([ property(cc.Label) ], Loading.prototype, "m_TextLoading", void 0);
      __decorate([ property(cc.Node) ], Loading.prototype, "m_LoadingContent", void 0);
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(BaseUIForm_1.default);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "../UIFramework/BaseUIForm": "BaseUIForm",
    "./Utils/ActionTimer": "ActionTimer",
    "./Utils/ShareCode": "ShareCode"
  } ],
  MainCharView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4153dys2xNt7tFz7tmqCeT", "MainCharView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var RoleIconView_1 = require("../Common/RoleIconView");
    var TapGameData4Ctrl_1 = require("../Controller/TapGameData4Ctrl");
    var HeroCtrl_1 = require("../ctrl/HeroCtrl");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapHero4_1 = require("../Logic/TapHero4");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainCharView = function(_super) {
      __extends(MainCharView, _super);
      function MainCharView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_lblPropertis = new Array();
        _this.mSpriteCost = [];
        _this._currentCost = 0;
        return _this;
      }
      MainCharView.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
        this.CurrentUIType.UIForm_ShowMode = BaseUIForm_1.UIFormShowMode.ReverseChange;
      };
      MainCharView.prototype.start = function() {
        this.install_hero();
        this.updateBtn();
      };
      MainCharView.prototype.Init_Hero = function() {
        var level = 0;
        if (0 == HeroCtrl_1.default.getInstancle().m_idHeroSellect) {
          level = HeroCtrl_1.default.getInstancle().GetHeroLeadLevel();
          null != this.m_TapHero._heroModelController && this.m_TapHero._heroModelController.DestroyModel();
          this.m_TapHero.LoadHero(TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo(), 1);
        } else {
          null != this.m_TapHero._heroModelController && this.m_TapHero._heroModelController.DestroyModel();
          level = HeroCtrl_1.default.getInstancle().GetLevelHeroById(HeroCtrl_1.default.getInstancle().m_idHeroSellect);
          this.m_TapHero.LoadHero(TapGameData4Ctrl_1.default.GetInstance().GetHeroSidekickInfo(HeroCtrl_1.default.getInstancle().heroId[HeroCtrl_1.default.getInstancle().m_idHeroSellect]), level);
        }
        this.ReloadPoints();
      };
      MainCharView.prototype.install_hero = function() {
        var _this = this;
        var herolist = new Array();
        herolist.push(TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo());
        TapGameData4Ctrl_1.default.GetInstance().ListHeroSideKickInfo.forEach(function(her) {
          herolist.push(her);
        });
        herolist.forEach(function(mem) {
          var temp = cc.instantiate(_this.pre_roleIcon);
          _this.m_content_role.addChild(temp);
          temp.getComponent(RoleIconView_1.default).init(mem);
          temp.active = true;
          temp.on("ITEM_CLICK", function(res) {
            var roleIcon = res;
            HeroCtrl_1.default.getInstancle().m_idHeroSellect = HeroCtrl_1.default.getInstancle().indexHeroById(roleIcon.datas.m_HeroKey);
            _this.updateBtn();
          });
        });
      };
      MainCharView.prototype.ReloadPoints = function() {
        if (0 == HeroCtrl_1.default.getInstancle().m_idHeroSellect) {
          var level = 0 == HeroCtrl_1.default.getInstancle().m_idHeroSellect ? HeroCtrl_1.default.getInstancle().GetHeroLeadLevel() : HeroCtrl_1.default.getInstancle().GetLevelHeroById(HeroCtrl_1.default.getInstancle().m_idHeroSellect);
          var heroInfo = 0 == HeroCtrl_1.default.getInstancle().m_idHeroSellect ? TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo() : TapGameData4Ctrl_1.default.GetInstance().GetHeroSidekickInfo(HeroCtrl_1.default.getInstancle().heroId[HeroCtrl_1.default.getInstancle().m_idHeroSellect]);
          this.m_lblPropertis[0].string = heroInfo.CalculateHpPoint(level) + "";
          this.m_lblPropertis[1].string = heroInfo.CalculateAttackPoint(level) + "";
          this.m_lblPropertis[2].string = heroInfo.CalculateSpeedPoint(level) + "";
          this.m_lblPropertis[3].string = heroInfo.CalculateHealingPoint(level) + "";
          this._currentCost = TapGameData4Ctrl_1.default.GetInstance().GetCostUpLeader(level + 1);
          this.m_iconCost.spriteFrame = this.mSpriteCost[0];
          this.m_TextCost.string = this._currentCost + "";
          cc.find("Text", this.m_btnUpgrade.node).getComponent(cc.Label).string = level > 0 ? "N\xe2ng C\u1ea5p" : "M\u1edf Kh\xf3a";
        } else {
          var lvls = HeroCtrl_1.default.getInstancle().GetLevelHeroById(HeroCtrl_1.default.getInstancle().m_idHeroSellect);
          var heroInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroSidekickInfo(HeroCtrl_1.default.getInstancle().heroId[HeroCtrl_1.default.getInstancle().m_idHeroSellect]);
          this.m_lblPropertis[0].string = heroInfo.CalculateHpPoint(lvls) + "";
          this.m_lblPropertis[1].string = heroInfo.CalculateAttackPoint(lvls) + "";
          this.m_lblPropertis[2].string = heroInfo.CalculateSpeedPoint(lvls) + "";
          this.m_lblPropertis[3].string = heroInfo.CalculateHealingPoint(lvls) + "";
          this._currentCost = 0;
          if (lvls > 0) {
            this.m_iconCost.spriteFrame = this.mSpriteCost[0];
            this._currentCost = TapGameData4Ctrl_1.default.GetInstance().GetCostUpSidekick(lvls + 1);
            cc.find("Text", this.m_btnUpgrade.node).getComponent(cc.Label).string = "N\xe2ng C\u1ea5p";
          } else {
            this.m_iconCost.spriteFrame = this.mSpriteCost[1];
            this._currentCost = heroInfo.m_GemUnlock;
            cc.find("Text", this.m_btnUpgrade.node).getComponent(cc.Label).string = "M\u1edf Kh\xf3a";
          }
          this.m_TextCost.string = this._currentCost + "";
        }
      };
      MainCharView.prototype.changeHeroHandle = function(evt, index) {
        index = Number.parseInt(index);
        HeroCtrl_1.default.getInstancle().m_idHeroSellect += index;
        console.log("changeHeroHandle", HeroCtrl_1.default.getInstancle().m_idHeroSellect);
        this.updateBtn();
      };
      MainCharView.prototype.updateBtn = function() {
        if (0 == HeroCtrl_1.default.getInstancle().m_idHeroSellect) this.m_btn_left.active = false; else if (4 == HeroCtrl_1.default.getInstancle().m_idHeroSellect) this.m_btn_right.active = false; else {
          this.m_btn_left.active = true;
          this.m_btn_right.active = true;
        }
        this.m_TapHero.node.active && this.Init_Hero();
      };
      MainCharView.prototype.ButtonUpgradeClick = function() {
        var type = this.m_iconCost.spriteFrame == this.mSpriteCost[0] ? 1 : 0;
        if (0 == type && this._currentCost > TapSavingData4_1.default.GetPlayerGem()) return;
        if (1 == type && this._currentCost > TapSavingData4_1.default.GetPlayerGold()) return;
        1 == type ? TapSavingData4_1.default.GoldChange(-this._currentCost) : 2 == type && TapSavingData4_1.default.GemChange(-this._currentCost);
        var levelFrom = HeroCtrl_1.default.getInstancle().GetLevelHeroById(HeroCtrl_1.default.getInstancle().m_idHeroSellect);
        null != levelFrom && void 0 != levelFrom || (levelFrom = 0);
        var lvNew = levelFrom + 1;
        HeroCtrl_1.default.getInstancle().UpdateLevelHero(HeroCtrl_1.default.getInstancle().m_idHeroSellect, lvNew);
        this.ReloadPoints();
      };
      __decorate([ property(TapHero4_1.default) ], MainCharView.prototype, "m_TapHero", void 0);
      __decorate([ property(cc.Node) ], MainCharView.prototype, "m_btn_left", void 0);
      __decorate([ property(cc.Node) ], MainCharView.prototype, "m_btn_right", void 0);
      __decorate([ property(cc.Label) ], MainCharView.prototype, "m_lblPropertis", void 0);
      __decorate([ property(cc.Button) ], MainCharView.prototype, "m_btnUpgrade", void 0);
      __decorate([ property(cc.Sprite) ], MainCharView.prototype, "m_iconCost", void 0);
      __decorate([ property(cc.Label) ], MainCharView.prototype, "m_TextCost", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainCharView.prototype, "mSpriteCost", void 0);
      __decorate([ property(cc.Node) ], MainCharView.prototype, "pre_roleIcon", void 0);
      __decorate([ property(cc.Node) ], MainCharView.prototype, "m_content_role", void 0);
      MainCharView = __decorate([ ccclass ], MainCharView);
      return MainCharView;
    }(BaseUIForm_1.default);
    exports.default = MainCharView;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../Common/RoleIconView": "RoleIconView",
    "../Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "../Logic/TapHero4": "TapHero4",
    "../ctrl/HeroCtrl": "HeroCtrl",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  MainIdleScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46375TRzDNCH77aTwygniHi", "MainIdleScreen");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var UIManager_1 = require("../../UIFramework/UIManager");
    var ConstDefine_1 = require("../ConstDefine");
    var StageRoadCtrl_1 = require("../Controller/StageRoadCtrl");
    var TapGameData4Ctrl_1 = require("../Controller/TapGameData4Ctrl");
    var TapPanelLoot_1 = require("../Controller/TapPanelLoot");
    var HeroCtrl_1 = require("../ctrl/HeroCtrl");
    var ItemsCtrl_1 = require("../ctrl/ItemsCtrl");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var GameDirection_1 = require("../GameDirection");
    var TapHero4_1 = require("../Logic/TapHero4");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainIdleScreen = function(_super) {
      __extends(MainIdleScreen, _super);
      function MainIdleScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.isPause = false;
        _this.m_countLoopAttack = 0;
        _this.m_lootPanel = null;
        return _this;
      }
      MainIdleScreen_1 = MainIdleScreen;
      MainIdleScreen.prototype.onLoad = function() {
        null == MainIdleScreen_1._instancle && (MainIdleScreen_1._instancle = this);
      };
      MainIdleScreen.getInstancle = function() {
        return this._instancle;
      };
      MainIdleScreen.prototype.start = function() {
        this.InitHero();
        console.error("Hide Loadding");
        UIManager_1.default.GetInstance().CloseOrReturnUIForms(ConstDefine_1.default.LOADDING);
      };
      MainIdleScreen.prototype.InitHero = function() {
        this._addHeroMain();
        this.scheduleOnce(this._addEnemy, 2);
      };
      MainIdleScreen.prototype.OnOpenDongDoi = function() {
        this.OpenUIform(ConstDefine_1.default.DONG_DOI);
      };
      MainIdleScreen.prototype.OnOpenTuiDo = function() {
        this.OpenUIform(ConstDefine_1.default.BAG);
      };
      MainIdleScreen.prototype.OnOpenSkill = function() {
        this.OpenUIform(ConstDefine_1.default.SKILL);
      };
      MainIdleScreen.prototype.OnOpenQuest = function() {
        this.OpenUIform(ConstDefine_1.default.QUEST);
      };
      MainIdleScreen.prototype.OnOpenShop = function() {
        this.OpenUIform(ConstDefine_1.default.SHOP);
      };
      MainIdleScreen.prototype.OnOpenBattle = function() {
        this.CloseUIForm();
        UIManager_1.default.GetInstance().ShowUIForm(ConstDefine_1.default.BATTLE, function(res) {
          var battle = res;
          battle.FirstLoadGame();
        });
      };
      MainIdleScreen.prototype._addHeroMain = function() {
        var _this = this;
        var heroLeadLv = HeroCtrl_1.default.getInstancle().GetHeroLeadLevel();
        console.log(heroLeadLv);
        var heroLeadInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo();
        TapHero4_1.default.InstantiateHero(this.m_rootHero, heroLeadInfo, function(res) {
          _this.m_mainHero = res.getComponent(TapHero4_1.default);
          _this.m_mainHero.Appear();
          _this.m_mainHero.node.setPosition(_this.m_postLeft.getPosition().x, 0);
          console.log("loz", _this.m_postLeft.getPosition().x);
        });
      };
      MainIdleScreen.prototype._addEnemy = function() {
        var _this = this;
        var stageInfo = TapGameData4Ctrl_1.default.GetInstance().GetStageInfo(1);
        var r = 20001 + Math.round(3 * Math.random());
        var horoEnemyInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroEnemyInfo(r);
        var heroLevel = stageInfo.m_HeroLevel;
        console.log(horoEnemyInfo.m_HeroKey);
        TapHero4_1.default.InstantiateHero(this.m_rootEnemy, horoEnemyInfo, function(res) {
          _this.m_HeroEnemy = res.getComponent(TapHero4_1.default);
          _this.m_HeroEnemy.Appear();
          _this.m_HeroEnemy.node.setPosition(0, 0);
          _this.m_HeroEnemy.m_actionComplte = function(aniName) {
            if ("death" == aniName) {
              _this.m_HeroEnemy.DestroyHero();
              MainIdleScreen_1.getInstancle()._addEnemy();
            }
          };
          _this.EnemyStart(_this.m_HeroEnemy, _this.m_mainHero.m_Direction == GameDirection_1.GameDirection.LEFT ? GameDirection_1.GameDirection.RIGHT : GameDirection_1.GameDirection.LEFT);
        });
      };
      MainIdleScreen.prototype.EnemyStart = function(m_HeroEnemy, gameDirect) {
        var _this = this;
        var m_postX = 0;
        if (gameDirect == GameDirection_1.GameDirection.LEFT) {
          m_postX = this.m_postLeft.getPosition().x + 600;
          m_HeroEnemy.SetFacing(GameDirection_1.GameDirection.RIGHT);
        } else {
          m_postX = this.m_postRight.getPosition().x - 600;
          m_HeroEnemy.SetFacing(GameDirection_1.GameDirection.LEFT);
        }
        this.scheduleOnce(function() {
          m_HeroEnemy.SetFacing(gameDirect);
        }, .1);
        console.log(m_postX);
        m_HeroEnemy.node.setPosition(new cc.Vec2(m_postX, 0));
        m_HeroEnemy.movePost(gameDirect == GameDirection_1.GameDirection.LEFT ? this.m_postLeft.getPosition() : this.m_postRight.getPosition(), function() {
          m_HeroEnemy.Appear();
          _this.m_countLoopAttack = 1;
          _this.m_mainHero.findEnemy(_this.m_rootEnemy, _this.AttackHandle);
        });
      };
      MainIdleScreen.prototype.AttackHandle = function() {
        var _this = this;
        if (this.isPause) return;
        HeroCtrl_1.default.getInstancle().scheduleOnce(function() {
          MainIdleScreen_1.getInstancle().m_HeroEnemy.Hit();
        }, .1);
        MainIdleScreen_1.getInstancle().m_mainHero.Attack(function(aniName) {
          if ("attack" == aniName || "skill" == aniName) {
            _this.m_countLoopAttack -= 1;
            try {
              if (_this.m_countLoopAttack <= 0) {
                _this.m_HeroEnemy.Die();
                MainIdleScreen_1.getInstancle().LoopHandle();
              } else HeroCtrl_1.default.getInstancle().scheduleOnce(function() {
                MainIdleScreen_1.getInstancle().AttackHandle();
              }, 1.5);
            } catch (e) {}
          }
        });
      };
      MainIdleScreen.prototype.LoopHandle = function() {
        var _this = this;
        var md = StageRoadCtrl_1.StageRoadCtrl.getInstancle().getRoardCurrent();
        if (null == md) return;
        md.gold > 0 && cc.loader.loadRes("Image/ico_coin", cc.SpriteFrame, function(err, spriteGold) {
          _this.m_lootPanel.PouringItems(md.gold, spriteGold);
          TapSavingData4_1.default.GoldChange(md.gold);
        });
        md.coin > 0 && cc.loader.loadRes("Image/ico_diamon", cc.SpriteFrame, function(err, spriteGem) {
          _this.m_lootPanel.PouringItems(md.coin, spriteGem);
          TapSavingData4_1.default.GoldChange(md.gold);
        });
        if (md.isRewar) {
          var sl = md.slRewar;
          var _loop_1 = function() {
            var mdDrop = ItemsCtrl_1.ItemsCtrl.getInstancle().getRandomDrop();
            cc.loader.loadRes("Images/SmallIcon/" + mdDrop.icon, cc.SpriteFrame, function(err, spriteGem) {
              _this.m_lootPanel.PouringItems(md.coin, spriteGem);
              ItemsCtrl_1.ItemsCtrl.getInstancle().addItem(mdDrop.id);
            });
          };
          for (var i = 0; i < sl; i++) _loop_1();
        }
      };
      var MainIdleScreen_1;
      __decorate([ property(cc.Label) ], MainIdleScreen.prototype, "label", void 0);
      __decorate([ property ], MainIdleScreen.prototype, "text", void 0);
      __decorate([ property(cc.Node) ], MainIdleScreen.prototype, "m_rootHero", void 0);
      __decorate([ property(cc.Node) ], MainIdleScreen.prototype, "m_rootEnemy", void 0);
      __decorate([ property(cc.Node) ], MainIdleScreen.prototype, "m_postRight", void 0);
      __decorate([ property(cc.Node) ], MainIdleScreen.prototype, "m_postLeft", void 0);
      __decorate([ property(TapPanelLoot_1.default) ], MainIdleScreen.prototype, "m_lootPanel", void 0);
      MainIdleScreen = MainIdleScreen_1 = __decorate([ ccclass ], MainIdleScreen);
      return MainIdleScreen;
    }(BaseUIForm_1.default);
    exports.default = MainIdleScreen;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../../UIFramework/UIManager": "UIManager",
    "../ConstDefine": "ConstDefine",
    "../Controller/StageRoadCtrl": "StageRoadCtrl",
    "../Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "../Controller/TapPanelLoot": "TapPanelLoot",
    "../GameDirection": "GameDirection",
    "../Logic/TapHero4": "TapHero4",
    "../ctrl/HeroCtrl": "HeroCtrl",
    "../ctrl/ItemsCtrl": "ItemsCtrl",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  PaymentPackageModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cee8eVG1hBAs53JTsytzCYY", "PaymentPackageModel");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaymentPackageModel = function() {
      function PaymentPackageModel() {}
      PaymentPackageModel = __decorate([ ccclass ], PaymentPackageModel);
      return PaymentPackageModel;
    }();
    exports.default = PaymentPackageModel;
    cc._RF.pop();
  }, {} ],
  QuestCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c8a9oNaY5FC6U5Ow7idXMG", "QuestCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QuestCtrl = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var QuestModel_1 = require("../Model/QuestModel");
    var GameHelp_1 = require("../Utils/GameHelp");
    var DataServerCtrl_1 = require("./DataServerCtrl");
    var HeroCtrl_1 = require("./HeroCtrl");
    var TapSavingData4_1 = require("./TapSavingData4");
    var QuestCtrl = function(_super) {
      __extends(QuestCtrl, _super);
      function QuestCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      QuestCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(QuestCtrl);
        }
        return this._instancle;
      };
      QuestCtrl.prototype.start = function() {
        this.init();
      };
      QuestCtrl.prototype.init = function() {
        this.m_allQuest = DataServerCtrl_1.default.getInstancle().GetData("questData");
        this.m_questHaveGet = TapSavingData4_1.default.getAllQuestFinish();
        null != this.m_questHaveGet && void 0 != this.m_questHaveGet || (this.m_questHaveGet = new Array());
        this.updateHandle();
      };
      QuestCtrl.prototype.getAllQuest = function() {
        null != this.m_allQuest && void 0 != this.m_allQuest || this.init();
        this.m_allQuest.sort(function(a, b) {
          return a.questStatus > b.questStatus ? 1 : -1;
        });
        return this.m_allQuest;
      };
      QuestCtrl.prototype.checkQuestStatus = function(mQuestModel) {
        if (this.m_questHaveGet.findIndex(function(x) {
          return x == mQuestModel.id;
        }) >= 0) return 3;
        var result = 1;
        switch (mQuestModel.type_require) {
         case QuestModel_1.QuestType.OPEN_HERO:
          result = HeroCtrl_1.default.getInstancle().GetLevelHeroById(mQuestModel.value_require[0] - 1) > 0 ? 1 : 2;
          break;

         case QuestModel_1.QuestType.UPDATE_LEVEL_HERO:
          var levelTarget = 1 == mQuestModel.value_require[0] ? HeroCtrl_1.default.getInstancle().GetHeroLeadLevel() : HeroCtrl_1.default.getInstancle().GetLevelHeroById(mQuestModel.value_require[0]);
          result = levelTarget >= mQuestModel.value_require[1] ? 1 : 2;
        }
        return result;
      };
      QuestCtrl.prototype.GetRewardQuest = function(mData) {
        var _a;
        this.m_questHaveGet.push(mData.id);
        1 == mData.type_coin ? TapSavingData4_1.default.GoldChange(mData.value_get) : 2 == mData.type_coin && TapSavingData4_1.default.GemChange(mData.value_get);
        TapSavingData4_1.default.setAllQuestFinish();
        null === (_a = this.ReloadHandle) || void 0 === _a ? void 0 : _a.call(this);
        this.updateHandle();
      };
      QuestCtrl.prototype.updateHandle = function() {
        if (null == this.m_notice) return;
        GameHelp_1.UnityHelper.findAll(this.m_allQuest, function(source) {
          return 1 == source.questStatus;
        }).length > 0 ? this.m_notice.active = true : this.m_notice.active = false;
      };
      return QuestCtrl;
    }(cc.Component);
    exports.QuestCtrl = QuestCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Model/QuestModel": "QuestModel",
    "../Utils/GameHelp": "GameHelp",
    "./DataServerCtrl": "DataServerCtrl",
    "./HeroCtrl": "HeroCtrl",
    "./TapSavingData4": "TapSavingData4"
  } ],
  QuestItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2dc41wOBOxGCYuaE4Yq4g8S", "QuestItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var QuestCtrl_1 = require("../ctrl/QuestCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuestItem = function(_super) {
      __extends(QuestItem, _super);
      function QuestItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_listSpriteFarme = [];
        return _this;
      }
      QuestItem.prototype.start = function() {};
      QuestItem.prototype.show = function(data, index) {
        this.m_data = data;
        this.m_lblName.string = this.m_data.name;
        this.m_lblDes.string = this.m_data.decreption;
        this.m_iconSprite.spriteFrame = 1 == this.m_data.type_coin ? this.m_listSpriteFarme[0] : this.m_listSpriteFarme[1];
        this.m_lblCoinGet.string = this.m_data.value_get + "";
        this.buildButton();
      };
      QuestItem.prototype.buildButton = function() {
        var type = QuestCtrl_1.QuestCtrl.getInstancle().checkQuestStatus(this.m_data);
        switch (type) {
         case 2:
          this.m_btnGet.getComponentInChildren(cc.Label).string = "Ch\u01b0a \u0110\u1ea1t";
          this.m_btnGet.interactable = false;
          break;

         case 1:
          this.m_btnGet.getComponentInChildren(cc.Label).string = "Nh\u1eadn";
          this.m_btnGet.interactable = true;
          break;

         case 3:
          this.m_btnGet.getComponentInChildren(cc.Label).string = "\u0110\xe3 Nh\u1eadn";
          this.m_btnGet.interactable = false;
        }
      };
      QuestItem.prototype.Get = function() {
        QuestCtrl_1.QuestCtrl.getInstancle().GetRewardQuest(this.m_data);
      };
      __decorate([ property(cc.Label) ], QuestItem.prototype, "m_lblName", void 0);
      __decorate([ property(cc.Label) ], QuestItem.prototype, "m_lblDes", void 0);
      __decorate([ property(cc.Sprite) ], QuestItem.prototype, "m_iconSprite", void 0);
      __decorate([ property(cc.SpriteFrame) ], QuestItem.prototype, "m_listSpriteFarme", void 0);
      __decorate([ property(cc.Label) ], QuestItem.prototype, "m_lblCoinGet", void 0);
      __decorate([ property(cc.Button) ], QuestItem.prototype, "m_btnGet", void 0);
      QuestItem = __decorate([ ccclass ], QuestItem);
      return QuestItem;
    }(cc.Component);
    exports.default = QuestItem;
    cc._RF.pop();
  }, {
    "../ctrl/QuestCtrl": "QuestCtrl"
  } ],
  QuestModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b76979smJZNI5JT6hgnGb3n", "QuestModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QuestType = exports.QuestModel = void 0;
    var QuestCtrl_1 = require("../ctrl/QuestCtrl");
    var QuestModel = function() {
      function QuestModel() {}
      Object.defineProperty(QuestModel.prototype, "questStatus", {
        get: function() {
          return QuestCtrl_1.QuestCtrl.getInstancle().checkQuestStatus(this);
        },
        enumerable: false,
        configurable: true
      });
      return QuestModel;
    }();
    exports.QuestModel = QuestModel;
    var QuestType;
    (function(QuestType) {
      QuestType[QuestType["UPDATE_LEVEL_HERO"] = 1] = "UPDATE_LEVEL_HERO";
      QuestType[QuestType["OPEN_HERO"] = 2] = "OPEN_HERO";
    })(QuestType = exports.QuestType || (exports.QuestType = {}));
    cc._RF.pop();
  }, {
    "../ctrl/QuestCtrl": "QuestCtrl"
  } ],
  QuestView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b278eOOnbZD8qq61UlZlP47", "QuestView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("../../3rd/cores/UISuperLayout");
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var QuestItem_1 = require("../Common/QuestItem");
    var QuestCtrl_1 = require("../ctrl/QuestCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuestView = function(_super) {
      __extends(QuestView, _super);
      function QuestView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      QuestView.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
        this.CurrentUIType.UIForm_ShowMode = BaseUIForm_1.UIFormShowMode.ReverseChange;
      };
      QuestView.prototype.start = function() {
        this.m_items = QuestCtrl_1.QuestCtrl.getInstancle().getAllQuest();
        this.mQuestLayout.total(this.m_items.length);
      };
      QuestView.prototype.onRefreshEvent = function(node, index) {
        var info = this.m_items[index];
        node.getComponent(QuestItem_1.default).show(info, index);
        console.log(node);
      };
      __decorate([ property(UISuperLayout_1.default) ], QuestView.prototype, "mQuestLayout", void 0);
      QuestView = __decorate([ ccclass ], QuestView);
      return QuestView;
    }(BaseUIForm_1.default);
    exports.default = QuestView;
    cc._RF.pop();
  }, {
    "../../3rd/cores/UISuperLayout": "UISuperLayout",
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../Common/QuestItem": "QuestItem",
    "../ctrl/QuestCtrl": "QuestCtrl"
  } ],
  RangeSkillInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed127E7tLNBrJcp7DkM1vvb", "RangeSkillInfo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RangeSkillInfo = function(_super) {
      __extends(RangeSkillInfo, _super);
      function RangeSkillInfo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      RangeSkillInfo.prototype.start = function() {};
      __decorate([ property(cc.Label) ], RangeSkillInfo.prototype, "label", void 0);
      __decorate([ property ], RangeSkillInfo.prototype, "text", void 0);
      RangeSkillInfo = __decorate([ ccclass ], RangeSkillInfo);
      return RangeSkillInfo;
    }(cc.Component);
    exports.default = RangeSkillInfo;
    cc._RF.pop();
  }, {} ],
  RenderUnitContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0071fpl8DNFoKeA6dlb+69P", "RenderUnitContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RenderUnitContainer = function(_super) {
      __extends(RenderUnitContainer, _super);
      function RenderUnitContainer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RenderUnitContainer = __decorate([ ccclass ], RenderUnitContainer);
      return RenderUnitContainer;
    }(cc.Component);
    exports.default = RenderUnitContainer;
    cc._RF.pop();
  }, {} ],
  ResourceManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "936773WJYxOkKB+ADvZZvXR", "ResourceManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Dictionary_1 = require("../scripts/Utils/Dictionary");
    var UIManager_1 = require("./UIManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResourceManager = function(_super) {
      __extends(ResourceManager, _super);
      function ResourceManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.eventTarget = new EventTarget();
        return _this;
      }
      ResourceManager_1 = ResourceManager;
      ResourceManager.GetInstance = function() {
        if (null == this._instance) {
          var node = new cc.Node();
          this._instance = node.addComponent(ResourceManager_1);
          console.log("ScriptsNode", UIManager_1.default.GetInstance().ScriptsNode);
          UIManager_1.default.GetInstance().ScriptsNode.addChild(node);
        }
        return this._instance;
      };
      ResourceManager.prototype.onLoad = function() {
        this._dicTableResource = new Dictionary_1.Dictionary();
      };
      ResourceManager.prototype.start = function() {
        console.log("instancle is Add");
      };
      ResourceManager.prototype.LoadAsset = function(url, callback) {
        var _this = this;
        void 0 === callback && (callback = null);
        var resource = this._dicTableResource.GetValues(url);
        null == resource ? cc.loader.loadRes("Prefabs/" + url + ".prefab", function(err, prefap) {
          if (null != err) {
            console.log("load prefab bi loi:" + prefap);
            return;
          }
          console.log("load prefab bi loi:" + prefap);
          _this._dicTableResource.Add(url, prefap);
          resource = prefap;
          null != callback && void 0 != callback ? callback(url, resource) : _this.node.emit("RES_LOAD_COMPLETE", url, resource);
        }) : null != callback && void 0 != callback ? callback(url, resource) : this.node.emit("RES_LOAD_COMPLETE", url, resource);
      };
      ResourceManager.prototype.OnLoadDragonBone = function(path, armature, callback) {
        var _this = this;
        this._armature = armature;
        this.dataLoad = new Dictionary_1.Dictionary();
        this.loadDragonboneData("ske", path, function() {
          console.log("load fund");
          var factory = dragonBones.CCFactory.getInstance();
          armature.dragonAsset = _this.dataLoad.GetValues("ske");
          armature.dragonAtlasAsset = _this.dataLoad.GetValues("texture");
          callback();
        });
      };
      ResourceManager.prototype.loadDragonboneData = function(mType, path, callback) {
        var _this = this;
        if (this.dataLoad.ContainsKey("ske") && this.dataLoad.ContainsKey("texture")) {
          console.log("1");
          callback();
          return;
        }
        if (this.dataLoad.ContainsKey(mType)) return;
        var self = this;
        var tempPath = "";
        switch (mType) {
         case "ske":
          tempPath = path + "_ske";
          break;

         case "texture":
          tempPath = path + "_tex";
          break;

         case "atlas":
          tempPath = path + "_tex.png";
        }
        cc.loader.loadRes(tempPath, "ske" == mType ? dragonBones.DragonBonesAsset : dragonBones.DragonBonesAtlasAsset, function(err, prefap) {
          _this.dataLoad.Add(mType, prefap);
          console.log(err, tempPath);
          "ske" == mType && _this.loadDragonboneData("texture", path, callback);
          "texture" == mType && callback();
        });
      };
      var ResourceManager_1;
      ResourceManager = ResourceManager_1 = __decorate([ ccclass ], ResourceManager);
      return ResourceManager;
    }(cc.Component);
    exports.default = ResourceManager;
    cc._RF.pop();
  }, {
    "../scripts/Utils/Dictionary": "Dictionary",
    "./UIManager": "UIManager"
  } ],
  RoleIconView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40d36bu6ZtPp55vMfr4MQAe", "RoleIconView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoleIconView = function(_super) {
      __extends(RoleIconView, _super);
      function RoleIconView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RoleIconView.prototype.onLoad = function() {
        var _this = this;
        this.node.on("click", function() {
          _this.node.emit("ITEM_CLICK", _this);
        }, this);
      };
      RoleIconView.prototype.start = function() {};
      RoleIconView.prototype.init = function(m_datas) {
        var _this = this;
        this.datas = m_datas;
        console.log("Icon/roleicon/" + this.datas.m_HeroKey + ".png");
        cc.loader.loadRes("Icon/roleicon/" + this.datas.m_HeroKey + ".png", cc.SpriteFrame, function(er, prefap) {
          prefap && (_this.m_Icon.spriteFrame = prefap);
        });
      };
      __decorate([ property(cc.Sprite) ], RoleIconView.prototype, "m_borer", void 0);
      __decorate([ property(cc.Sprite) ], RoleIconView.prototype, "m_Icon", void 0);
      RoleIconView = __decorate([ ccclass ], RoleIconView);
      return RoleIconView;
    }(cc.Component);
    exports.default = RoleIconView;
    cc._RF.pop();
  }, {} ],
  SampleDragonBone: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c77133ANBBKtatT4RyJoFwc", "SampleDragonBone");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TapGameData4Ctrl_1 = require("./Controller/TapGameData4Ctrl");
    var GameDirection_1 = require("./GameDirection");
    var TapHero4_1 = require("./Logic/TapHero4");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SampleDragonBone = function(_super) {
      __extends(SampleDragonBone, _super);
      function SampleDragonBone() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.armature = null;
        _this.text = "hello";
        _this.m_HeroKey = 10001;
        _this.xScale = false;
        _this.facing = GameDirection_1.GameDirection.RIGHT;
        return _this;
      }
      SampleDragonBone.prototype.start = function() {
        TapGameData4Ctrl_1.default.GetInstance().init();
        this.m_lblId.textLabel.string = "10001";
      };
      SampleDragonBone.prototype.Button1Click = function() {
        var _this = this;
        if (null == this._tapHero) {
          this.m_HeroKey = Number.parseInt(this.m_lblId.textLabel.string);
          var heroInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroInfo(this.m_HeroKey);
          console.log(heroInfo);
          null != heroInfo && TapHero4_1.default.InstantiateHero(this.m_TfParentHeroes, heroInfo, function(res) {
            _this._tapHero = res.getComponent(TapHero4_1.default);
            _this._tapHero.SetPosition(new cc.Vec2(-6, -2));
          });
        }
      };
      SampleDragonBone.prototype.button2Click = function() {
        this._tapHero.Attack();
      };
      SampleDragonBone.prototype.Button6Click = function() {
        this.xScale = !this.xScale;
        this._tapHero.SetHeroScale(this.xScale ? 2 : 1);
      };
      SampleDragonBone.prototype.Button7Click = function() {
        this.facing == GameDirection_1.GameDirection.RIGHT ? this.facing = GameDirection_1.GameDirection.LEFT : this.facing = GameDirection_1.GameDirection.RIGHT;
        this._tapHero.SetFacing(this.facing);
      };
      SampleDragonBone.prototype.Button5Click = function() {
        if (null != this._tapHero) {
          this._tapHero.DestroyHero();
          this._tapHero = null;
        }
      };
      __decorate([ property(dragonBones.ArmatureDisplay) ], SampleDragonBone.prototype, "armature", void 0);
      __decorate([ property ], SampleDragonBone.prototype, "text", void 0);
      __decorate([ property(Number) ], SampleDragonBone.prototype, "m_HeroKey", void 0);
      __decorate([ property(cc.Node) ], SampleDragonBone.prototype, "m_TfParentHeroes", void 0);
      __decorate([ property(cc.Node) ], SampleDragonBone.prototype, "m_TfEffects", void 0);
      __decorate([ property(cc.Node) ], SampleDragonBone.prototype, "m_TfBattleObject", void 0);
      __decorate([ property(cc.EditBox) ], SampleDragonBone.prototype, "m_lblId", void 0);
      SampleDragonBone = __decorate([ ccclass ], SampleDragonBone);
      return SampleDragonBone;
    }(cc.Component);
    exports.default = SampleDragonBone;
    cc._RF.pop();
  }, {
    "./Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "./GameDirection": "GameDirection",
    "./Logic/TapHero4": "TapHero4"
  } ],
  SceneBattle4Ctrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c5d6Zk/6tFjoHVXOj7zPIl", "SceneBattle4Ctrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var UIManager_1 = require("../../UIFramework/UIManager");
    var ConstDefine_1 = require("../ConstDefine");
    var HeroCtrl_1 = require("../ctrl/HeroCtrl");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var GameDirection_1 = require("../GameDirection");
    var TapStateEndLose4_1 = require("../GameState/TapStateEndLose4");
    var TapStateEndWin4_1 = require("../GameState/TapStateEndWin4");
    var TapStateNextLevel4_1 = require("../GameState/TapStateNextLevel4");
    var TapStateNextTheme4_1 = require("../GameState/TapStateNextTheme4");
    var TapStatePlay4_1 = require("../GameState/TapStatePlay4");
    var TapStateRevive4_1 = require("../GameState/TapStateRevive4");
    var TapStateStart4_1 = require("../GameState/TapStateStart4");
    var TapStateTutorial4_1 = require("../GameState/TapStateTutorial4");
    var TapHero4_1 = require("../Logic/TapHero4");
    var ShareCode_1 = require("../Utils/ShareCode");
    var HeroType4_1 = require("./HeroType4");
    var StageRoadCtrl_1 = require("./StageRoadCtrl");
    var TapGameData4Ctrl_1 = require("./TapGameData4Ctrl");
    var TapPanelFlyPoint_1 = require("./TapPanelFlyPoint");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneBattle4Ctrl = function(_super) {
      __extends(SceneBattle4Ctrl, _super);
      function SceneBattle4Ctrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.m_PanelFlyPoint = null;
        _this.sideKich = [];
        _this.STATE_START = 11;
        _this.STATE_PAUSE = 1;
        _this.STATE_PLAY = 2;
        _this.STATE_END_WIN = 3;
        _this.STATE_END_LOSE = 4;
        _this.STATE_NEXT_LEVEL = 5;
        _this.STATE_REVIVE = 6;
        _this.STATE_NEXT_THEME = 7;
        _this.STATE_TUTORIAL = 1e3;
        _this._currentStateId = -1;
        _this.isStartgame = false;
        _this.m_ListHeroSk = new Array();
        return _this;
      }
      SceneBattle4Ctrl_1 = SceneBattle4Ctrl;
      Object.defineProperty(SceneBattle4Ctrl.prototype, "GroupHpBar", {
        get: function() {
          return this.m_GroupHpBar;
        },
        enumerable: false,
        configurable: true
      });
      SceneBattle4Ctrl.prototype.onLoad = function() {
        SceneBattle4Ctrl_1._instance = this;
        console.error("ProcessHeroDamage", SceneBattle4Ctrl_1._instance, this._currentStateId);
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
      };
      Object.defineProperty(SceneBattle4Ctrl, "Instance", {
        get: function() {
          return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
      });
      SceneBattle4Ctrl.prototype.ProcessHeroDamage = function(heroTakeHit, damage) {
        console.error("ProcessHeroDamage", damage, this._currentStateId);
        if (this._currentStateId == this.STATE_PLAY || this._currentStateId == this.STATE_TUTORIAL) {
          heroTakeHit.TakeDamage(damage);
          var pos = new cc.Vec2(0, 0);
          pos = "PointLeadHero" == heroTakeHit.node.parent.name ? this.heroPoint.getPosition() : this.enemyPoint.getPosition();
          var posPoint = new cc.Vec2(pos.x + 0, pos.y + 100);
          console.error("ProcessHeroDamage", damage, posPoint);
          this.m_PanelFlyPoint.ShowDamagePoint(damage, posPoint);
          if (heroTakeHit.IsDeath()) if (heroTakeHit.HeroType == HeroType4_1.HeroType4.LEAD) this.SetGameState(this.STATE_END_LOSE); else {
            this.SetGameState(this.STATE_END_WIN);
            heroTakeHit.HeroType == HeroType4_1.HeroType4.ENEMY && StageRoadCtrl_1.StageRoadCtrl.getInstancle().NextStage();
          }
        }
      };
      SceneBattle4Ctrl.prototype.start = function() {};
      SceneBattle4Ctrl.prototype.onEnable = function() {};
      SceneBattle4Ctrl.prototype.initHandle = function() {
        var _this = this;
        var m_enemyNode = cc.find("blank", this.m_HeroEnemy.node).getComponent(cc.Button);
        cc.error("side click", m_enemyNode);
        m_enemyNode.node.on("click", function(evt) {
          _this.OnHeroEnemyClick();
        }, this);
        var m_heroNode = cc.find("blank", this.m_HeroLead.node).getComponent(cc.Button);
        m_heroNode.node.on("click", function(evt) {
          _this.OnHeroLeadClick();
        }, this);
      };
      SceneBattle4Ctrl.prototype.getHeroTranform = function() {
        return this.heroPoint;
      };
      SceneBattle4Ctrl.prototype.getEnemyTranform = function() {
        return this.enemyPoint;
      };
      SceneBattle4Ctrl.prototype.getSideKich = function(value) {
        return this.sideKich[value];
      };
      SceneBattle4Ctrl.prototype.GetPosFingerLeadHero = function() {
        var ret = new cc.Vec2();
        ret = this.heroPoint.getPosition();
        ret = new cc.Vec2(ret.x, ret.y + 100);
        return ret;
      };
      SceneBattle4Ctrl.prototype.GetPosFingerEnemy = function() {
        var ret = new cc.Vec2();
        ret = this.enemyPoint.getPosition();
        ret = new cc.Vec2(ret.x, ret.y + 100);
        return ret;
      };
      SceneBattle4Ctrl.prototype.OnHeroLeadClick = function() {
        if (this._currentStateId == this.STATE_PLAY || this._currentStateId == this.STATE_END_WIN || this._currentStateId == this.STATE_END_LOSE || this._currentStateId == this.STATE_TUTORIAL) {
          if (!this.m_HeroLead.IsDeath()) {
            var healingValue = this.m_HeroLead.HealingHp();
            var posHp = new cc.Vec2(this.m_HeroLead.GetPosition().x, this.m_HeroLead.GetPosition().y + 100);
            this.m_PanelFlyPoint.ShowHealingPoint(healingValue, posHp);
          }
        } else console.error("------ Game state not valid:" + this._currentStateId);
      };
      SceneBattle4Ctrl.prototype.OnHeroEnemyClick = function() {
        cc.error("_currentStateId :" + this._currentStateId);
        this._currentStateId == this.STATE_PLAY || this._currentStateId == this.STATE_TUTORIAL ? this.m_HeroLead.TryToMakeAttack() : cc.error("------ Game state not valid:" + this._currentStateId);
      };
      SceneBattle4Ctrl.prototype.FirstLoadGame = function() {
        this.LoadHeroLead();
        var lstSidekick = TapSavingData4_1.default.GetListSidekickUnlocked();
        this.LoadHeroSideKick(lstSidekick);
        var stageIdx = TapSavingData4_1.default.GetCurrentStageIndex();
        this.LoadGameLevel(stageIdx, .6);
      };
      SceneBattle4Ctrl.prototype.LoadGameLevel = function(stageIdx, delayBeforeStart) {
        var _this = this;
        this.DestroyEnemyHero();
        console.error("--------- LOAD STAGE: " + stageIdx);
        this.LoadHeroEnemy(stageIdx);
        new ShareCode_1.default(this, function() {
          var makeTutorial = !TapSavingData4_1.default.IsTutFinish();
          _this.initHandle();
          makeTutorial ? _this.SetGameState(_this.STATE_TUTORIAL) : _this.SetGameState(_this.STATE_PLAY);
        }, delayBeforeStart).doIt();
      };
      SceneBattle4Ctrl.prototype.SetGameState = function(stateId) {
        console.error("SetGameState:", stateId);
        if (stateId == this._currentStateId) return;
        null != this._currentState && this._currentState.OnStateExit();
        this._currentState = null;
        switch (stateId) {
         case this.STATE_START:
          this.isStartgame = true;
          this._currentState = new TapStateStart4_1.TapStateStart4(this);
          break;

         case this.STATE_PAUSE:
          break;

         case this.STATE_PLAY:
          this._currentState = new TapStatePlay4_1.TapStatePlay4(this);
          break;

         case this.STATE_END_WIN:
          this._currentState = new TapStateEndWin4_1.TapStateEndWin4(this);
          break;

         case this.STATE_END_LOSE:
          this._currentState = new TapStateEndLose4_1.TapStateEndLose4(this);
          break;

         case this.STATE_NEXT_LEVEL:
          this._currentState = new TapStateNextLevel4_1.TapStateNextLevel4(this);
          break;

         case this.STATE_REVIVE:
          this._currentState = new TapStateRevive4_1.TapStateRevive4(this);
          break;

         case this.STATE_NEXT_THEME:
          this._currentState = new TapStateNextTheme4_1.TapStateNextTheme4(this);
          break;

         case this.STATE_TUTORIAL:
          this._currentState = new TapStateTutorial4_1.TapStateTutorial4(this);
        }
        if (null != this._currentState) {
          console.error("------ State enter: " + stateId);
          this._currentStateId = stateId;
          this._currentState.OnStateEnter();
        } else console.error("----- ERROR - Null state:" + stateId);
      };
      SceneBattle4Ctrl.prototype.LoadHeroEnemy = function(stageIdx) {
        var _this = this;
        var stageInfo = TapGameData4Ctrl_1.default.GetInstance().GetStageInfo(stageIdx);
        var horoEnemyInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroEnemyInfo(stageInfo.m_HeroKey);
        var heroLevel = stageInfo.m_HeroLevel;
        new ShareCode_1.default(this, function() {
          TapHero4_1.default.InstantiateHero(_this.getEnemyTranform(), horoEnemyInfo, function(res) {
            _this.m_HeroEnemy = res.getComponent(TapHero4_1.default);
            new ShareCode_1.default(_this, function() {
              _this.m_HeroEnemy.SetFacing(GameDirection_1.GameDirection.LEFT);
            }, .1).doIt();
          }, heroLevel, HeroType4_1.HeroType4.ENEMY);
        }, .55).doIt();
      };
      SceneBattle4Ctrl.prototype.DestroyEnemyHero = function() {
        if (null != this.m_HeroEnemy) {
          this.m_HeroEnemy.DestroyHero();
          this.m_HeroEnemy = null;
        }
      };
      SceneBattle4Ctrl.prototype.LoadHeroLead = function() {
        var _this = this;
        var heroLeadLv = HeroCtrl_1.default.getInstancle().GetHeroLeadLevel();
        var heroLeadInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroLeadInfo();
        TapHero4_1.default.InstantiateHero(this.getHeroTranform(), heroLeadInfo, function(res) {
          _this.m_HeroLead = res.getComponent(TapHero4_1.default);
          _this.m_HeroLead.Appear();
          _this.m_HeroLead.node.setPosition(0, 0);
          _this.m_HeroLead.SetFacing(GameDirection_1.GameDirection.RIGHT);
        }, heroLeadLv, HeroType4_1.HeroType4.LEAD);
      };
      SceneBattle4Ctrl.prototype.LoadHeroSideKick = function(lstSkHeroKey) {
        var _this = this;
        var heroSkLv = TapSavingData4_1.default.GetSidekickLevel();
        var idx = 0;
        this.schedule(function() {
          console.error("LoadHeroSideKick", HeroCtrl_1.default.getInstancle().heroId[idx]);
          if (idx < lstSkHeroKey.length - 1) {
            var heroSkInfo = TapGameData4Ctrl_1.default.GetInstance().GetHeroSidekickInfo(HeroCtrl_1.default.getInstancle().heroId[idx + 1]);
            TapHero4_1.default.InstantiateHero(_this.getSideKich(idx), heroSkInfo, function(res) {
              var heroSk = res.getComponent(TapHero4_1.default);
              heroSk.SetFacing(GameDirection_1.GameDirection.RIGHT);
              _this.m_ListHeroSk.push(heroSk);
              idx += 1;
            }, TapSavingData4_1.default.GetSidekickLevel(), HeroType4_1.HeroType4.SIDEKICK);
          }
        }, .1, lstSkHeroKey.length, .1);
      };
      SceneBattle4Ctrl.prototype.buildHeroSideKid = function(idHero, idx, callback) {};
      SceneBattle4Ctrl.prototype.ReviveGameLevel = function(stageIdx, delayBeforeStart) {
        var _this = this;
        console.error("--------- REVIVE STAGE: " + stageIdx);
        this.DestroyLeadHero();
        this.DestroyEnemyHero();
        this.LoadHeroLead();
        this.LoadHeroEnemy(stageIdx);
        new ShareCode_1.default(this, function() {
          _this.SetGameState(_this.STATE_PLAY);
          _this.initHandle();
        }, delayBeforeStart).doIt();
      };
      SceneBattle4Ctrl.prototype.DestroyLeadHero = function() {
        if (null != this.m_HeroLead) {
          this.m_HeroLead.DestroyHero();
          this.m_HeroLead = null;
        }
      };
      SceneBattle4Ctrl.prototype.LoadTheme = function(themeId) {
        console.error("------- LOAD THEMEE: " + themeId);
      };
      SceneBattle4Ctrl.prototype.update = function(dt) {
        var _a;
        null === (_a = this._currentState) || void 0 === _a ? void 0 : _a.Ticks(dt);
      };
      SceneBattle4Ctrl.prototype.endBattle = function() {
        var _this = this;
        if (null != this.m_HeroEnemy) {
          this.m_HeroEnemy.DestroyHero();
          this.m_HeroEnemy = null;
        }
        if (null != this.m_HeroLead) {
          this.m_HeroLead.DestroyHero();
          this.m_HeroLead = null;
        }
        this.Hiding();
        this.OpenUIform(ConstDefine_1.default.LOADDING);
        new ShareCode_1.default(this, function() {
          console.error("------- LOAD THEMEE: ");
          _this.CloseUIForm();
          UIManager_1.default.GetInstance().CloseOrReturnUIForms(ConstDefine_1.default.LOADDING);
          _this.OpenUIform(ConstDefine_1.default.IDLE_SCREEN);
        }, .2).doIt();
      };
      SceneBattle4Ctrl.prototype.onDisable = function() {};
      var SceneBattle4Ctrl_1;
      __decorate([ property(cc.Label) ], SceneBattle4Ctrl.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], SceneBattle4Ctrl.prototype, "heroPoint", void 0);
      __decorate([ property(cc.Node) ], SceneBattle4Ctrl.prototype, "enemyPoint", void 0);
      __decorate([ property({
        type: TapPanelFlyPoint_1.default
      }) ], SceneBattle4Ctrl.prototype, "m_PanelFlyPoint", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], SceneBattle4Ctrl.prototype, "m_GroupHpBar", void 0);
      __decorate([ property(cc.Node) ], SceneBattle4Ctrl.prototype, "sideKich", void 0);
      SceneBattle4Ctrl = SceneBattle4Ctrl_1 = __decorate([ ccclass ], SceneBattle4Ctrl);
      return SceneBattle4Ctrl;
    }(BaseUIForm_1.default);
    exports.default = SceneBattle4Ctrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../../UIFramework/UIManager": "UIManager",
    "../ConstDefine": "ConstDefine",
    "../GameDirection": "GameDirection",
    "../GameState/TapStateEndLose4": "TapStateEndLose4",
    "../GameState/TapStateEndWin4": "TapStateEndWin4",
    "../GameState/TapStateNextLevel4": "TapStateNextLevel4",
    "../GameState/TapStateNextTheme4": "TapStateNextTheme4",
    "../GameState/TapStatePlay4": "TapStatePlay4",
    "../GameState/TapStateRevive4": "TapStateRevive4",
    "../GameState/TapStateStart4": "TapStateStart4",
    "../GameState/TapStateTutorial4": "TapStateTutorial4",
    "../Logic/TapHero4": "TapHero4",
    "../Utils/ShareCode": "ShareCode",
    "../ctrl/HeroCtrl": "HeroCtrl",
    "../ctrl/TapSavingData4": "TapSavingData4",
    "./HeroType4": "HeroType4",
    "./StageRoadCtrl": "StageRoadCtrl",
    "./TapGameData4Ctrl": "TapGameData4Ctrl",
    "./TapPanelFlyPoint": "TapPanelFlyPoint"
  } ],
  ShareCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7eeacYA01JHeLpnt9vdOYiW", "ShareCode");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DelayFunctionCalling = function() {
      function DelayFunctionCalling(mono, action, delay) {
        this.m_Delay = 0;
        this.m_Mono = mono;
        this.m_Action = action;
        this.m_Delay = delay;
      }
      DelayFunctionCalling.prototype.doIt = function() {
        this.m_Mono.schedule(this.m_Action, 0, 0, this.m_Delay);
      };
      DelayFunctionCalling = __decorate([ ccclass ], DelayFunctionCalling);
      return DelayFunctionCalling;
    }();
    exports.default = DelayFunctionCalling;
    cc._RF.pop();
  }, {} ],
  ShopItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "260cap6p81Jt43L3M1CCFhZ", "ShopItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShopItem = function(_super) {
      __extends(ShopItem, _super);
      function ShopItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_lblPackage = null;
        _this.m_btnGet = null;
        _this.m_iconPackage = null;
        return _this;
      }
      ShopItem.prototype.show = function(data, index) {
        var _this = this;
        this.m_data = data;
        this.m_index = index;
        this.m_lblPackage.string = this.m_data.name_package;
        cc.loader.loadRes("Icon/shop/" + this.m_data.icon, cc.SpriteFrame, function(err, prefab) {
          _this.m_iconPackage.spriteFrame = prefab;
        });
        this.m_btnGet.getComponentInChildren(cc.Label).string = this.m_data.price + "\u0111";
      };
      ShopItem.prototype.start = function() {};
      __decorate([ property(cc.Label) ], ShopItem.prototype, "m_lblPackage", void 0);
      __decorate([ property(cc.Button) ], ShopItem.prototype, "m_btnGet", void 0);
      __decorate([ property(cc.Sprite) ], ShopItem.prototype, "m_iconPackage", void 0);
      ShopItem = __decorate([ ccclass ], ShopItem);
      return ShopItem;
    }(cc.Component);
    exports.default = ShopItem;
    cc._RF.pop();
  }, {} ],
  ShopView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "489395dDItKf6oZDXtCYHJw", "ShopView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("../../3rd/cores/UISuperLayout");
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var ShopItem_1 = require("../Common/ShopItem");
    var DataServerCtrl_1 = require("../ctrl/DataServerCtrl");
    var GameHelp_1 = require("../Utils/GameHelp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShopView = function(_super) {
      __extends(ShopView, _super);
      function ShopView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ShopView.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
        this.CurrentUIType.UIForm_ShowMode = BaseUIForm_1.UIFormShowMode.ReverseChange;
      };
      ShopView.prototype.start = function() {
        var source = DataServerCtrl_1.default.getInstancle().GetData("payment");
        this.m_allPayment_diamon = GameHelp_1.UnityHelper.findAll(source, function(res) {
          return 1 == res.typeCoin;
        });
        this.m_allPayment_gold = GameHelp_1.UnityHelper.findAll(source, function(res) {
          return 2 == res.typeCoin;
        });
        console.log(this.m_allPayment_diamon.length);
        this.m_shopDiamion.total(this.m_allPayment_diamon.length);
        this.m_shopGold.total(this.m_allPayment_gold.length);
      };
      ShopView.prototype.onRefreshEvent1 = function(node, index) {
        var info = this.m_allPayment_diamon[index];
        node.getComponent(ShopItem_1.default).show(info, index);
        console.log(node);
      };
      ShopView.prototype.onRefreshEvent2 = function(node, index) {
        var info = this.m_allPayment_gold[index];
        node.getComponent(ShopItem_1.default).show(info, index);
        console.log(node);
      };
      __decorate([ property(UISuperLayout_1.default) ], ShopView.prototype, "m_shopDiamion", void 0);
      __decorate([ property(UISuperLayout_1.default) ], ShopView.prototype, "m_shopGold", void 0);
      ShopView = __decorate([ ccclass ], ShopView);
      return ShopView;
    }(BaseUIForm_1.default);
    exports.default = ShopView;
    cc._RF.pop();
  }, {
    "../../3rd/cores/UISuperLayout": "UISuperLayout",
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../Common/ShopItem": "ShopItem",
    "../Utils/GameHelp": "GameHelp",
    "../ctrl/DataServerCtrl": "DataServerCtrl"
  } ],
  SkillCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "108e6p4i8xK04u2234j0oWm", "SkillCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SkillCtrl = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var Dictionary_1 = require("../Utils/Dictionary");
    var DataServerCtrl_1 = require("./DataServerCtrl");
    var TapSavingData4_1 = require("./TapSavingData4");
    var SkillCtrl = function(_super) {
      __extends(SkillCtrl, _super);
      function SkillCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SkillCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(SkillCtrl);
          this._instancle.init();
        }
        return this._instancle;
      };
      SkillCtrl.prototype.start = function() {};
      SkillCtrl.prototype.init = function() {
        this.m_skillAll = DataServerCtrl_1.default.getInstancle().GetData("skill");
        if (null == this.m_skillAll || void 0 == this.m_skillAll) return;
        this.m_skillUse = TapSavingData4_1.default.GetSkillUse();
        this.m_SkillLevel = TapSavingData4_1.default.GetSkillServer();
        if (null == this.m_SkillLevel) {
          this.m_SkillLevel = new Dictionary_1.Dictionary();
          for (var i = 0; i < this.m_skillAll.length; i++) this.m_SkillLevel.Add(this.m_skillAll[i].m_Id, 0);
          cc.sys.localStorage.setItem(TapSavingData4_1.default.KEY_SKILL_LEVEL, JSON.stringify(this.m_SkillLevel));
        }
      };
      SkillCtrl.prototype.getLevelSkill = function(idSkill) {
        return this.m_SkillLevel.ContainsKey(idSkill) ? this.m_SkillLevel[idSkill] : 0;
      };
      SkillCtrl.prototype.UpdateSkillLevel = function(idSkill) {
        var _a;
        this.m_SkillLevel.ContainsKey(idSkill) && (this.m_SkillLevel[idSkill] += 1);
        TapSavingData4_1.default.SaveSkillServer();
        null === (_a = this.reload) || void 0 === _a ? void 0 : _a.call(this);
      };
      SkillCtrl.prototype.addSkillUse = function(skillID) {
        var _a;
        if (this.m_skillUse.length >= 3) ; else {
          this.m_skillUse.push(skillID);
          TapSavingData4_1.default.SaveSkillUse();
          null === (_a = this.reloadSkill) || void 0 === _a ? void 0 : _a.call(this);
        }
      };
      SkillCtrl.prototype.removeSkillUse = function(skillID) {
        var _a;
        var idx = this.m_skillUse.findIndex(function(x) {
          return x == skillID;
        });
        idx >= 0 && delete this.m_skillUse[idx];
        TapSavingData4_1.default.SaveSkillUse();
        null === (_a = this.reloadSkill) || void 0 === _a ? void 0 : _a.call(this);
      };
      SkillCtrl.prototype.GetSkillActive = function() {
        var _this = this;
        var m_result = new Array();
        for (var i = 0; i < this.m_skillUse.length; i++) m_result.push(this.m_skillAll.find(function(x) {
          return x.m_Id == _this.m_skillUse[i];
        }));
        return m_result;
      };
      return SkillCtrl;
    }(cc.Component);
    exports.SkillCtrl = SkillCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Utils/Dictionary": "Dictionary",
    "./DataServerCtrl": "DataServerCtrl",
    "./TapSavingData4": "TapSavingData4"
  } ],
  SkillMeleeController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49c05lvdz1H5o+KUqg+AHJE", "SkillMeleeController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G2BattleContext_1 = require("./G2BattleContext");
    var G2TimeCounter_1 = require("./G2TimeCounter");
    var SkillProjectile_1 = require("./SkillProjectile");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkillMeleeController = function() {
      function SkillMeleeController(skillInfo) {
        this._listProjectile = new Array();
        this._skillInfo = skillInfo;
      }
      SkillMeleeController.prototype.GetSkillInfo = function() {
        console.error("SkillMeleeController", this._skillInfo);
        return this._skillInfo;
      };
      SkillMeleeController.prototype.PlayEffectCast = function(position) {};
      SkillMeleeController.prototype.PlayEffectHit = function(position) {};
      SkillMeleeController.prototype.SetCustomScale = function(scale) {};
      SkillMeleeController.prototype.SetFacing = function(facing) {};
      SkillMeleeController.prototype.SetSkillLayerOrder = function(layerOrder) {};
      SkillMeleeController.prototype.InitSkill = function(skillInfo) {
        this.InitSkill(skillInfo);
      };
      SkillMeleeController.prototype.GetAFreeProjectile = function() {
        this._listProjectile.forEach(function(sp) {
          if (sp.m_FreeToUse) return sp;
        });
        var skillInfo = this.GetSkillInfo();
        if (null != skillInfo.m_ProjectileInfo) {
          var newPjt = new SkillProjectile_1.default(G2BattleContext_1.default.Instance.TfBattleObjectsContainer, skillInfo.m_ProjectileInfo);
          this._listProjectile.push(newPjt);
          return newPjt;
        }
        return null;
      };
      SkillMeleeController.prototype.PlaySkill = function(castPosition, args) {
        var _this = this;
        void 0 === args && (args = null);
        cc.error("-------- Play skill range cast eff:" + args);
        this.PlayEffectCast(castPosition);
        var skillInfo = this.GetSkillInfo();
        if (null != args) {
          this._counterDealDamage = new G2TimeCounter_1.default(skillInfo.m_DelayDealingDamage, function() {
            args.m_ListSkillTarget.forEach(function(targetInfo) {
              var _a;
              null === (_a = _this.m_DealingDamageTrigger) || void 0 === _a ? void 0 : _a.call(_this, targetInfo);
            });
          });
          this._counterCauseHitEffect = new G2TimeCounter_1.default(skillInfo.m_DelayCauseHitEffect, function() {
            args.m_ListSkillTarget.forEach(function(targetInfo) {
              _this.PlayEffectHit(targetInfo.m_TargetPosition);
            });
          });
        }
      };
      SkillMeleeController.prototype.DestroySkill = function() {
        this._listProjectile.forEach(function(sp) {
          sp.DestroyGroup();
        });
      };
      SkillMeleeController.prototype.Ticks = function(deltaTime) {
        var _a, _b;
        null === (_a = this._counterDealDamage) || void 0 === _a ? void 0 : _a.Ticks(deltaTime);
        null === (_b = this._counterCauseHitEffect) || void 0 === _b ? void 0 : _b.Ticks(deltaTime);
      };
      SkillMeleeController = __decorate([ ccclass ], SkillMeleeController);
      return SkillMeleeController;
    }();
    exports.default = SkillMeleeController;
    cc._RF.pop();
  }, {
    "./G2BattleContext": "G2BattleContext",
    "./G2TimeCounter": "G2TimeCounter",
    "./SkillProjectile": "SkillProjectile"
  } ],
  SkillModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e6f1id1uxMj5ptg+iQyLky", "SkillModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SkillType = exports.SkillModel = void 0;
    var SkillCtrl_1 = require("../ctrl/SkillCtrl");
    var SkillModel = function() {
      function SkillModel() {}
      SkillModel.prototype.level = function() {
        return SkillCtrl_1.SkillCtrl.getInstancle().getLevelSkill(this.m_Id);
      };
      SkillModel.prototype.isUnlock = function() {
        return SkillCtrl_1.SkillCtrl.getInstancle().getLevelSkill(this.m_Id) <= 0;
      };
      SkillModel.prototype.coinUpdate = function() {
        return this.m_GoldUpdate + this.level() / 2 * this.m_GoldUpdate;
      };
      return SkillModel;
    }();
    exports.SkillModel = SkillModel;
    var SkillType;
    (function(SkillType) {
      SkillType[SkillType["BUFF_HERO_LEAD"] = 1] = "BUFF_HERO_LEAD";
      SkillType[SkillType["BUFF_SIDE_KICK"] = 2] = "BUFF_SIDE_KICK";
      SkillType[SkillType["BUFF_LOOT"] = 3] = "BUFF_LOOT";
      SkillType[SkillType["ALL"] = 4] = "ALL";
    })(SkillType = exports.SkillType || (exports.SkillType = {}));
    cc._RF.pop();
  }, {
    "../ctrl/SkillCtrl": "SkillCtrl"
  } ],
  SkillProjectileContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab581AcU9FGrYu0gareLSHq", "SkillProjectileContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkillProjectileContainer = function(_super) {
      __extends(SkillProjectileContainer, _super);
      function SkillProjectileContainer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SkillProjectileContainer = __decorate([ ccclass ], SkillProjectileContainer);
      return SkillProjectileContainer;
    }(cc.Component);
    exports.default = SkillProjectileContainer;
    cc._RF.pop();
  }, {} ],
  SkillProjectile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20dd4aCjUNEJpgzN0C9+144", "SkillProjectile");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AbstractRenderUnitGroup_1 = require("./AbstractRenderUnitGroup");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkillProjectile = function(_super) {
      __extends(SkillProjectile, _super);
      function SkillProjectile(tfParent, pjtInfo) {
        var _this = _super.call(this) || this;
        _this.m_FreeToUse = false;
        _this._tfParent = tfParent;
        _this._projectileInfo = pjtInfo;
        _this.LoadProjectile();
        return _this;
      }
      SkillProjectile.prototype.LoadProjectile = function() {
        var pathContainer = "/Prefabs/SkillProjectile";
        this.LoadRenderUnits(this._projectileContainer.m_TfRenderer, this._projectileInfo.m_ListRenderUnitInfo);
      };
      SkillProjectile.prototype.UpdateData = function(sortingOrder, customScale) {
        if (null != this._projectileContainer) {
          this._projectileContainer.m_SortingGroup.zIndex = sortingOrder;
          this._projectileContainer.m_TfGroupScale.scale = customScale;
        }
      };
      SkillProjectile.prototype.MakeMovement = function(posFrom, posTo, duration) {
        if (null == this._projectileContainer) return;
      };
      SkillProjectile.prototype.SetPosition = function(position) {
        null != this._tfProjectile && this._tfProjectile.setPosition(position);
      };
      SkillProjectile = __decorate([ ccclass ], SkillProjectile);
      return SkillProjectile;
    }(AbstractRenderUnitGroup_1.default);
    exports.default = SkillProjectile;
    cc._RF.pop();
  }, {
    "./AbstractRenderUnitGroup": "AbstractRenderUnitGroup"
  } ],
  SkillRangeController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0be61mUFglOM653LwKKZ5I/", "SkillRangeController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameDirection_1 = require("../GameDirection");
    var G2BattleContext_1 = require("./G2BattleContext");
    var G2TimeCounter_1 = require("./G2TimeCounter");
    var SkillProjectile_1 = require("./SkillProjectile");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkillRangeController = function() {
      function SkillRangeController(skillInfo) {
        this._listProjectile = new Array();
      }
      SkillRangeController.prototype.GetSkillInfo = function() {
        return this._skillInfo;
      };
      SkillRangeController.prototype.PlayEffectCast = function(position) {};
      SkillRangeController.prototype.PlayEffectHit = function(position) {};
      SkillRangeController.prototype.SetCustomScale = function(scale) {};
      SkillRangeController.prototype.SetFacing = function(facing) {};
      SkillRangeController.prototype.SetSkillLayerOrder = function(layerOrder) {};
      SkillRangeController.prototype.InitSkill = function(skillInfo) {
        this.InitSkill(skillInfo);
      };
      SkillRangeController.prototype.GetAFreeProjectile = function() {
        this._listProjectile.forEach(function(sp) {
          if (sp.m_FreeToUse) return sp;
        });
        var skillInfo = this.GetSkillInfo();
        if (null != skillInfo.m_ProjectileInfo) {
          var newPjt = new SkillProjectile_1.default(G2BattleContext_1.default.Instance.TfBattleObjectsContainer, skillInfo.m_ProjectileInfo);
          this._listProjectile.push(newPjt);
          return newPjt;
        }
        return null;
      };
      SkillRangeController.prototype.PlaySkill = function(castPosition, args) {
        var _this = this;
        void 0 === args && (args = null);
        this.PlayEffectCast(castPosition);
        if (null != args) {
          var skillInfo_1 = this.GetSkillInfo();
          this._counterLaunchProjectile = new G2TimeCounter_1.default(skillInfo_1.m_DelayLaunchProjectile, function() {
            args.m_ListSkillTarget.forEach(function(targetInfo) {
              var skillProjectile = _this.GetAFreeProjectile();
              if (null != skillProjectile) {
                skillProjectile.m_FreeToUse = false;
                skillProjectile.Show();
                var pointLaunch = new cc.Vec2(castPosition.x + skillInfo_1.m_OffsetLaunchProjectile.x, castPosition.y + skillInfo_1.m_OffsetLaunchProjectile.y);
                _this._facingDirection == GameDirection_1.GameDirection.LEFT;
                skillProjectile.SetPosition(pointLaunch);
                skillProjectile.UpdateData(_this._skillLayerOrder, _this._customScale);
                skillProjectile.MakeMovement(pointLaunch, targetInfo.m_TargetPosition, skillInfo_1.m_DurationProjectileFly);
              }
            });
          });
          var delayDealDmg = skillInfo_1.m_DurationProjectileFly + skillInfo_1.m_DelayLaunchProjectile;
          this._counterDealDamage = new G2TimeCounter_1.default(delayDealDmg, function() {
            args.m_ListSkillTarget.forEach(function(targetInfo) {
              var _a;
              _this.PlayEffectHit(targetInfo.m_TargetPosition);
              null === (_a = _this.m_DealingDamageTrigger) || void 0 === _a ? void 0 : _a.call(_this, targetInfo);
            });
          });
        }
      };
      SkillRangeController.prototype.DestroySkill = function() {
        this._listProjectile.forEach(function(sp) {
          sp.DestroyGroup();
        });
      };
      SkillRangeController.prototype.Ticks = function(deltaTime) {
        var _a, _b;
        null === (_a = this._counterDealDamage) || void 0 === _a ? void 0 : _a.Ticks(deltaTime);
        null === (_b = this._counterLaunchProjectile) || void 0 === _b ? void 0 : _b.Ticks(deltaTime);
        this._listProjectile.forEach(function(projectile) {
          projectile.Ticks(deltaTime);
        });
      };
      SkillRangeController = __decorate([ ccclass ], SkillRangeController);
      return SkillRangeController;
    }();
    exports.default = SkillRangeController;
    cc._RF.pop();
  }, {
    "../GameDirection": "GameDirection",
    "./G2BattleContext": "G2BattleContext",
    "./G2TimeCounter": "G2TimeCounter",
    "./SkillProjectile": "SkillProjectile"
  } ],
  SkillView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74690iZ/S5FfZ0ufTcN6xyL", "SkillView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("../../3rd/cores/UISuperLayout");
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var ItemIconSkill_1 = require("../Common/ItemIconSkill");
    var SkillCtrl_1 = require("../ctrl/SkillCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkillView = function(_super) {
      __extends(SkillView, _super);
      function SkillView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SkillView.prototype.onLoad = function() {
        this.CurrentUIType.UIForm_Type = BaseUIForm_1.UIFormType.Normal;
        this.CurrentUIType.UIForm_ShowMode = BaseUIForm_1.UIFormShowMode.ReverseChange;
      };
      SkillView.prototype.start = function() {
        this.m_items = SkillCtrl_1.SkillCtrl.getInstancle().m_skillAll;
        this.BuildItemScroll();
      };
      SkillView.prototype.BuildItemScroll = function() {
        this.mSkillViews.total(this.m_items.length);
      };
      SkillView.prototype.onRefreshEvent = function(node, index) {
        var info = this.m_items[index];
        node.getComponent(ItemIconSkill_1.default).show(info, index);
        console.log(node);
      };
      SkillView.prototype.AddSkill = function() {};
      __decorate([ property(UISuperLayout_1.default) ], SkillView.prototype, "mSkillViews", void 0);
      __decorate([ property(UISuperLayout_1.default) ], SkillView.prototype, "mItemSkillUse", void 0);
      SkillView = __decorate([ ccclass ], SkillView);
      return SkillView;
    }(BaseUIForm_1.default);
    exports.default = SkillView;
    cc._RF.pop();
  }, {
    "../../3rd/cores/UISuperLayout": "UISuperLayout",
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../Common/ItemIconSkill": "ItemIconSkill",
    "../ctrl/SkillCtrl": "SkillCtrl"
  } ],
  Stack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b57deLIDz1HkrVpXvjf7tAb", "Stack");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Stack = void 0;
    var Stack = function() {
      function Stack(capacity) {
        void 0 === capacity && (capacity = Infinity);
        this.capacity = capacity;
        this.storage = [];
      }
      Stack.prototype.Clear = function() {
        this.storage = [];
      };
      Object.defineProperty(Stack.prototype, "Count", {
        get: function() {
          return this.storage.length;
        },
        enumerable: false,
        configurable: true
      });
      Stack.prototype.push = function(item) {
        if (this.size() === this.capacity) throw Error("Stack has reached max capacity, you cannot add more items");
        this.storage.push(item);
      };
      Stack.prototype.pop = function() {
        return this.storage.pop();
      };
      Stack.prototype.peek = function() {
        return this.storage[this.size() - 1];
      };
      Stack.prototype.size = function() {
        return this.storage.length;
      };
      return Stack;
    }();
    exports.Stack = Stack;
    cc._RF.pop();
  }, {} ],
  StageRoadCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4ea4co9GZOFLi1J/SnZ8Ys", "StageRoadCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StageRoadCtrl = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var DataServerCtrl_1 = require("../ctrl/DataServerCtrl");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var StageRoadModel_1 = require("../Model/StageRoadModel");
    var GameHelp_1 = require("../Utils/GameHelp");
    var StageRoadCtrl = function(_super) {
      __extends(StageRoadCtrl, _super);
      function StageRoadCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StageRoadCtrl.getInstancle = function() {
        if (null == this._instancle) {
          var g = new cc.Node();
          g.parent = UIManager_1.default.GetInstance().ScriptsNode;
          this._instancle = g.addComponent(StageRoadCtrl);
          this._instancle.init();
        }
        return this._instancle;
      };
      Object.defineProperty(StageRoadCtrl.prototype, "childStageId", {
        get: function() {
          return this.m_childStageID;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StageRoadCtrl.prototype, "m_currentStageId", {
        get: function() {
          return TapSavingData4_1.default.GetCurrentStageIndex();
        },
        enumerable: false,
        configurable: true
      });
      StageRoadCtrl.prototype.init = function() {
        this.m_levelStage = new Array();
        var mdata = DataServerCtrl_1.default.getInstancle().GetData("road");
        var n_level = 1;
        var onNext = true;
        while (onNext) {
          var levels = GameHelp_1.UnityHelper.findAll(mdata, function(x) {
            return x.level == n_level;
          });
          if (levels.length <= 0) {
            onNext = false;
            break;
          }
          var mModel = new StageRoadModel_1.LevelStageModel();
          mModel.level = n_level;
          var idxbox = levels.findIndex(function(x) {
            return true == x.isBoss;
          });
          mModel.boss = levels[idxbox];
          delete levels[idxbox];
          mModel.stageList = levels;
          this.m_levelStage.push(mModel);
          n_level += 1;
        }
        this.m_childStageID = TapSavingData4_1.default.ChildCurrentStageId();
        null != this.m_childStageID && void 0 != this.m_childStageID || (this.m_childStageID = 1);
      };
      StageRoadCtrl.prototype.updateChildIndex = function() {
        if (this.m_childStageID < this.m_levelStage[this.m_currentStageId].stageList.length) {
          this.m_childStageID += 1;
          TapSavingData4_1.default.SaveCurrentChildIndex(this.m_childStageID);
        }
      };
      StageRoadCtrl.prototype.getRoardCurrent = function() {
        console.log("getRoardCurrent", this.m_levelStage[this.m_currentStageId].stageList.length);
        return this.m_childStageID >= this.m_levelStage[this.m_currentStageId].stageList.length ? null : this.m_levelStage[this.m_currentStageId].stageList[this.m_childStageID];
      };
      StageRoadCtrl.prototype.GetBossCurrent = function() {
        return this.m_levelStage[this.m_currentStageId].boss;
      };
      StageRoadCtrl.prototype.NextStage = function() {
        TapSavingData4_1.default.SaveCurrentStageIndex(this.m_currentStageId + 1);
        this.m_childStageID -= 1;
      };
      return StageRoadCtrl;
    }(cc.Component);
    exports.StageRoadCtrl = StageRoadCtrl;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../Model/StageRoadModel": "StageRoadModel",
    "../Utils/GameHelp": "GameHelp",
    "../ctrl/DataServerCtrl": "DataServerCtrl",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  StageRoadModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e492TZBjBKFYdApKLs4dxD", "StageRoadModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LevelStageModel = exports.StageRoadModel = void 0;
    var StageRoadModel = function() {
      function StageRoadModel() {}
      return StageRoadModel;
    }();
    exports.StageRoadModel = StageRoadModel;
    var LevelStageModel = function() {
      function LevelStageModel() {}
      return LevelStageModel;
    }();
    exports.LevelStageModel = LevelStageModel;
    cc._RF.pop();
  }, {} ],
  TapBattle4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03f25LNNGJIKoZ4N6/2PHq6", "TapBattle4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G2BattleContext_1 = require("./G2BattleContext");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapBattle4 = function(_super) {
      __extends(TapBattle4, _super);
      function TapBattle4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_ListHeroSk = [];
        _this.isStartgame = false;
        _this._onPause = false;
        return _this;
      }
      TapBattle4.prototype.onload = function() {
        this.Init();
      };
      Object.defineProperty(TapBattle4, "Instance", {
        get: function() {
          return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
      });
      TapBattle4.prototype.Init = function() {
        var bfc = G2BattleContext_1.default.Instance;
        bfc.TfEffectsContainer = this.m_GroupEffect;
        bfc.TfBattleObjectsContainer = this.m_GroupBattleObjects;
      };
      TapBattle4.prototype.StartGame = function() {};
      Object.defineProperty(TapBattle4.prototype, "onPause", {
        get: function() {
          return this._onPause;
        },
        enumerable: false,
        configurable: true
      });
      TapBattle4.prototype.ProcessHeroDamage = function(heroTakeHit, damage) {};
      TapBattle4.STATE_START = 11;
      TapBattle4.STATE_PAUSE = 1;
      TapBattle4.STATE_PLAY = 2;
      TapBattle4.STATE_END_WIN = 3;
      TapBattle4.STATE_END_LOSE = 4;
      TapBattle4.STATE_NEXT_LEVEL = 5;
      TapBattle4.STATE_REVIVE = 6;
      TapBattle4.STATE_NEXT_THEME = 7;
      TapBattle4.STATE_TUTORIAL = 1e3;
      TapBattle4.OFFSET_SIDEKICK_POS = 2;
      TapBattle4 = __decorate([ ccclass ], TapBattle4);
      return TapBattle4;
    }(cc.Component);
    exports.default = TapBattle4;
    cc._RF.pop();
  }, {
    "./G2BattleContext": "G2BattleContext"
  } ],
  TapDbHero4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "130eej7o2hOYr+r1jr3HFKm", "TapDbHero4");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapHeroModel4Info = exports.TapDbHeroModel4 = void 0;
    var AbstractCharacterModelInfo_1 = require("../Logic/AbstractCharacterModelInfo");
    var BaseSkillInfo_1 = require("./BaseSkillInfo");
    var TapDbHeroModel4 = function() {
      function TapDbHeroModel4() {
        this._lstHeroInfo = new Array();
        this.InitDb();
      }
      Object.defineProperty(TapDbHeroModel4, "Instance", {
        get: function() {
          null == this._instance && (this._instance = new TapDbHeroModel4());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      TapDbHeroModel4.prototype.InitDb = function() {
        this._lstHeroInfo.push(this.GenHero10001());
        this._lstHeroInfo.push(this.GenHero10002());
        this._lstHeroInfo.push(this.GenHero10003());
        this._lstHeroInfo.push(this.GenHero10004());
        this._lstHeroInfo.push(this.GenHero10005());
        this._lstHeroInfo.push(this.GenHero10006());
        this._lstHeroInfo.push(this.GenHero10007());
        this._lstHeroInfo.push(this.GenHero10008());
        this._lstHeroInfo.push(this.GenHero10009());
        this._lstHeroInfo.push(this.GenHero10010());
        this._lstHeroInfo.push(this.GenHero20001());
        this._lstHeroInfo.push(this.GenHero20002());
        this._lstHeroInfo.push(this.GenHero20003());
        this._lstHeroInfo.push(this.GenHero20004());
      };
      TapDbHeroModel4.prototype.GenHero10001 = function() {
        var hero66 = new TapHeroModel4Info(10001);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero66.m_SkillInfo = skillInfo;
        return hero66;
      };
      TapDbHeroModel4.prototype.GenHero10002 = function() {
        var hero214 = new TapHeroModel4Info(10002);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.5);
        hero214.m_SkillInfo = skillInfo;
        return hero214;
      };
      TapDbHeroModel4.prototype.GenHero10003 = function() {
        var hero215 = new TapHeroModel4Info(10003);
        return hero215;
      };
      TapDbHeroModel4.prototype.GenHero10004 = function() {
        var hero216 = new TapHeroModel4Info(10004);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero216.m_SkillInfo = skillInfo;
        return hero216;
      };
      TapDbHeroModel4.prototype.GenHero10005 = function() {
        var hero219 = new TapHeroModel4Info(10005);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(1.1);
        hero219.m_SkillInfo = skillInfo;
        return hero219;
      };
      TapDbHeroModel4.prototype.GenHero10006 = function() {
        var hero220 = new TapHeroModel4Info(10006);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero220.m_SkillInfo = skillInfo;
        return hero220;
      };
      TapDbHeroModel4.prototype.GenHero10007 = function() {
        var hero223 = new TapHeroModel4Info(10007);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero223.m_SkillInfo = skillInfo;
        return hero223;
      };
      TapDbHeroModel4.prototype.GenHero10008 = function() {
        var hero224 = new TapHeroModel4Info(10008);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero224.m_SkillInfo = skillInfo;
        return hero224;
      };
      TapDbHeroModel4.prototype.GenHero10009 = function() {
        var hero225 = new TapHeroModel4Info(10009);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero225.m_SkillInfo = skillInfo;
        return hero225;
      };
      TapDbHeroModel4.prototype.GenHero10010 = function() {
        var hero229 = new TapHeroModel4Info(10010);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero229.m_SkillInfo = skillInfo;
        return hero229;
      };
      TapDbHeroModel4.prototype.GenHero20001 = function() {
        var hero229 = new TapHeroModel4Info(20001);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero229.m_SkillInfo = skillInfo;
        return hero229;
      };
      TapDbHeroModel4.prototype.GenHero20002 = function() {
        var hero229 = new TapHeroModel4Info(20002);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero229.m_SkillInfo = skillInfo;
        return hero229;
      };
      TapDbHeroModel4.prototype.GenHero20003 = function() {
        var hero229 = new TapHeroModel4Info(20003);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero229.m_SkillInfo = skillInfo;
        return hero229;
      };
      TapDbHeroModel4.prototype.GenHero20004 = function() {
        var hero229 = new TapHeroModel4Info(20004);
        var skillInfo = new BaseSkillInfo_1.MeleeSkillInfo().SetDelayCauseHitEffect(.5).SetDelayDealingDamage(.7);
        hero229.m_SkillInfo = skillInfo;
        return hero229;
      };
      TapDbHeroModel4.prototype.GetAHero = function() {
        return this._lstHeroInfo[0];
      };
      TapDbHeroModel4.prototype.GetHeroModel = function(heroKey) {
        var result = null;
        this._lstHeroInfo.forEach(function(modelInfo) {
          modelInfo.m_HeroKey == heroKey && (result = modelInfo);
        });
        return result;
      };
      return TapDbHeroModel4;
    }();
    exports.TapDbHeroModel4 = TapDbHeroModel4;
    var TapHeroModel4Info = function() {
      function TapHeroModel4Info(heroKey) {
        this.m_HeroKey = 1;
        this.m_HeroKey = heroKey;
        var modelInfo = new AbstractCharacterModelInfo_1.CharacterSpineBoneModelInfo();
        modelInfo.m_heroKey = heroKey.toString();
        this.m_ModelInfo = modelInfo;
      }
      return TapHeroModel4Info;
    }();
    exports.TapHeroModel4Info = TapHeroModel4Info;
    cc._RF.pop();
  }, {
    "../Logic/AbstractCharacterModelInfo": "AbstractCharacterModelInfo",
    "./BaseSkillInfo": "BaseSkillInfo"
  } ],
  TapGameData4Ctrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "112f0TBOyJE/J9YidD2Y+xd", "TapGameData4Ctrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapMessage4 = exports.TapStageTitle4 = void 0;
    var BaseControler_1 = require("./BaseControler");
    var TapHeroInfo4_1 = require("./TapHeroInfo4");
    var TapStageInfo4_1 = require("./TapStageInfo4");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapGameData4Ctrl = function(_super) {
      __extends(TapGameData4Ctrl, _super);
      function TapGameData4Ctrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TOTAL_THEME = 3;
        _this._heroLeadInfo = null;
        _this._listHeroSideKickInfo = new Array();
        _this._listHeroEnemyInfo = new Array();
        _this._listStageInfo = new Array();
        _this._listGoldCostUpSidekick = new Array();
        _this._listGoldCostUpLeader = new Array();
        return _this;
      }
      Object.defineProperty(TapGameData4Ctrl.prototype, "ListHeroSideKickInfo", {
        get: function() {
          return this._listHeroSideKickInfo;
        },
        enumerable: false,
        configurable: true
      });
      TapGameData4Ctrl.prototype.GetCostUpLeader = function(level) {
        return this._listGoldCostUpLeader[level];
      };
      TapGameData4Ctrl.prototype.GetCostUpSidekick = function(level) {
        return this._listGoldCostUpSidekick[level];
      };
      TapGameData4Ctrl.prototype.GetHeroSidekickInfo = function(heroKey) {
        console.log(heroKey, this._listHeroSideKickInfo);
        var result = null;
        this._listHeroSideKickInfo.forEach(function(heroInfo) {
          heroInfo.m_HeroKey == heroKey && (result = heroInfo);
        });
        return result;
      };
      TapGameData4Ctrl.prototype.GetHeroLeadInfo = function() {
        console.log(this._heroLeadInfo);
        return this._heroLeadInfo;
      };
      TapGameData4Ctrl.prototype.init = function() {
        this.InitHeroMain();
        this.InitSideKicks();
        this.InitEnemies();
        this.InitStages();
        this.InitCostUpgrade();
      };
      TapGameData4Ctrl.prototype.InitStages = function() {
        this._listStageInfo = new Array();
        var lstAllEnemyId = new Array();
        this._listHeroEnemyInfo.forEach(function(heroInfo) {
          lstAllEnemyId.push(heroInfo.m_HeroKey);
        });
        var countHeroKey = 0;
        for (var i = 0; i < 10; i++) {
          countHeroKey >= lstAllEnemyId.length && (countHeroKey = 0);
          var groupScale = 1;
          this._listStageInfo.push(new TapStageInfo4_1.default(lstAllEnemyId[countHeroKey], groupScale + i, false));
          countHeroKey++;
        }
        for (var i = 0; i < 10; i++) {
          countHeroKey >= lstAllEnemyId.length && (countHeroKey = 0);
          var groupScale = 20;
          this._listStageInfo.push(new TapStageInfo4_1.default(lstAllEnemyId[countHeroKey], groupScale + i));
          countHeroKey++;
        }
        for (var i = 0; i < 10; i++) {
          countHeroKey >= lstAllEnemyId.length && (countHeroKey = 0);
          var groupScale = 30;
          this._listStageInfo.push(new TapStageInfo4_1.default(lstAllEnemyId[countHeroKey], groupScale + i));
          countHeroKey++;
        }
        for (var i = 0; i < 10; i++) {
          countHeroKey >= lstAllEnemyId.length && (countHeroKey = 0);
          var groupScale = 50;
          this._listStageInfo.push(new TapStageInfo4_1.default(lstAllEnemyId[countHeroKey], groupScale + i));
          countHeroKey++;
        }
      };
      TapGameData4Ctrl.prototype.InitSideKicks = function() {
        var sidekick1 = new TapHeroInfo4_1.default();
        sidekick1.m_HeroKey = 10002, sidekick1.m_HpBase = 100, sidekick1.m_HpScale = 10, 
        sidekick1.m_AtkBase = 50, sidekick1.m_AtkScale = 10, sidekick1.m_Speed = 5, sidekick1.m_SpeedScale = 1, 
        sidekick1.m_GemUnlock = 600, sidekick1.m_SkillCooldown = 2.3;
        this._listHeroSideKickInfo.push(sidekick1);
        var sidekick2 = new TapHeroInfo4_1.default();
        sidekick2.m_HeroKey = 10003, sidekick2.m_HpBase = 100, sidekick2.m_HpScale = 10, 
        sidekick2.m_AtkBase = 80, sidekick2.m_AtkScale = 20, sidekick2.m_Speed = 5, sidekick2.m_SpeedScale = 2, 
        sidekick2.m_GemUnlock = 1400, sidekick2.m_SkillCooldown = 2.5;
        this._listHeroSideKickInfo.push(sidekick2);
        var sidekick3 = new TapHeroInfo4_1.default();
        sidekick3.m_HeroKey = 10004, sidekick3.m_HpBase = 100, sidekick3.m_HpScale = 10, 
        sidekick3.m_AtkBase = 100, sidekick3.m_AtkScale = 30, sidekick3.m_Speed = 10, sidekick3.m_SpeedScale = 3, 
        sidekick3.m_GemUnlock = 5e3, sidekick3.m_SkillCooldown = 2.9;
        this._listHeroSideKickInfo.push(sidekick3);
        var sidekick4 = new TapHeroInfo4_1.default();
        sidekick4.m_HeroKey = 10005, sidekick4.m_HpBase = 100, sidekick4.m_HpScale = 10, 
        sidekick4.m_AtkBase = 150, sidekick4.m_AtkScale = 40, sidekick4.m_Speed = 15, sidekick4.m_SpeedScale = 4, 
        sidekick4.m_GemUnlock = 8e3, sidekick4.m_SkillCooldown = 2.2;
        this._listHeroSideKickInfo.push(sidekick4);
      };
      TapGameData4Ctrl.prototype.InitHeroMain = function() {
        this._heroLeadInfo = new TapHeroInfo4_1.default();
        this._heroLeadInfo.m_HeroKey = 10006, this._heroLeadInfo.m_HpBase = 1e3, this._heroLeadInfo.m_HpScale = 50, 
        this._heroLeadInfo.m_Healing = 100, this._heroLeadInfo.m_HealingScale = 10, this._heroLeadInfo.m_AtkBase = 200, 
        this._heroLeadInfo.m_AtkScale = 50, this._heroLeadInfo.m_ModelScale = 1, this._heroLeadInfo.m_SkillCooldown = 1;
      };
      TapGameData4Ctrl.prototype.InitEnemies = function() {
        var en1 = new TapHeroInfo4_1.default();
        en1.m_HeroKey = 10001, en1.m_HpBase = 1e3, en1.m_HpScale = 50, en1.m_AtkBase = 100, 
        en1.m_AtkScale = 10;
        this._listHeroEnemyInfo.push(en1);
        var en2 = new TapHeroInfo4_1.default();
        en2.m_HeroKey = 10007, en2.m_HpBase = 1200, en2.m_HpScale = 60, en2.m_AtkBase = 10, 
        en2.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en2);
        var en3 = new TapHeroInfo4_1.default();
        en3.m_HeroKey = 10008, en3.m_HpBase = 100, en3.m_HpScale = 10, en3.m_AtkBase = 10, 
        en3.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en3);
        var en4 = new TapHeroInfo4_1.default();
        en4.m_HeroKey = 10009, en4.m_HpBase = 100, en4.m_HpScale = 10, en4.m_AtkBase = 10, 
        en4.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en4);
        var en5 = new TapHeroInfo4_1.default();
        en5.m_HeroKey = 10010, en5.m_HpBase = 100, en5.m_HpScale = 10, en5.m_AtkBase = 10, 
        en5.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en5);
        var en20000 = new TapHeroInfo4_1.default();
        en20000.m_HeroKey = 2e4, en20000.m_HpBase = 100, en20000.m_HpScale = 10, en20000.m_AtkBase = 10, 
        en20000.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20000);
        var en20001 = new TapHeroInfo4_1.default();
        en20001.m_HeroKey = 20001, en20001.m_HpBase = 100, en20001.m_HpScale = 10, en20001.m_AtkBase = 10, 
        en20001.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20001);
        var en20002 = new TapHeroInfo4_1.default();
        en20002.m_HeroKey = 20002, en20002.m_HpBase = 100, en20002.m_HpScale = 10, en20002.m_AtkBase = 10, 
        en20002.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20002);
        var en20003 = new TapHeroInfo4_1.default();
        en20003.m_HeroKey = 20003, en20003.m_HpBase = 100, en20003.m_HpScale = 10, en20003.m_AtkBase = 10, 
        en20003.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20003);
        var en20004 = new TapHeroInfo4_1.default();
        en20004.m_HeroKey = 20004, en20004.m_HpBase = 100, en20004.m_HpScale = 10, en20004.m_AtkBase = 10, 
        en20004.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20004);
        var en20005 = new TapHeroInfo4_1.default();
        en20005.m_HeroKey = 20005, en20005.m_HpBase = 100, en20005.m_HpScale = 10, en20005.m_AtkBase = 10, 
        en20005.m_AtkScale = 1;
        this._listHeroEnemyInfo.push(en20005);
        var count = 0;
        this._listHeroEnemyInfo.forEach(function(enemy) {
          enemy.m_HpBase = 1e3;
          enemy.m_HpScale = 100;
          enemy.m_AtkBase = 100;
          enemy.m_AtkScale = 5;
          count++;
        });
      };
      TapGameData4Ctrl.prototype.GetHeroEnemyInfo = function(heroKey) {
        var result;
        this._listHeroEnemyInfo.forEach(function(heroInfo) {
          heroInfo.m_HeroKey == heroKey && (result = heroInfo);
        });
        return result;
      };
      TapGameData4Ctrl.prototype.InitCostUpgrade = function() {
        var start = 100;
        var step = 50;
        var extraOfStep = 4;
        for (var i = 0; i < 1e3; i++) {
          var value = start + i * step + extraOfStep * i;
          this._listGoldCostUpSidekick.push(value);
        }
        start = 80;
        step = 30;
        extraOfStep = 4;
        for (var i = 0; i < 1e3; i++) {
          var value = start + i * step + extraOfStep * i;
          this._listGoldCostUpLeader.push(value);
        }
      };
      TapGameData4Ctrl.prototype.GetHeroInfo = function(heroKey) {
        var result = null;
        heroKey == this._heroLeadInfo.m_HeroKey && (result = this._heroLeadInfo);
        this._listHeroEnemyInfo.forEach(function(tmp) {
          tmp.m_HeroKey == heroKey && (result = tmp);
        });
        this._listHeroSideKickInfo.forEach(function(tmp) {
          tmp.m_HeroKey == heroKey && (result = tmp);
        });
        return result;
      };
      TapGameData4Ctrl.prototype.GetStageInfo = function(stageIdx) {
        if (stageIdx >= this._listStageInfo.length) return null;
        return this._listStageInfo[stageIdx];
      };
      TapGameData4Ctrl = __decorate([ ccclass ], TapGameData4Ctrl);
      return TapGameData4Ctrl;
    }(BaseControler_1.BaseController);
    exports.default = TapGameData4Ctrl;
    var TapStageTitle4 = function() {
      function TapStageTitle4() {
        this.m_GroupId = -1;
        this.m_StageSubId = 0;
      }
      TapStageTitle4_1 = TapStageTitle4;
      TapStageTitle4.prototype.GetStageName = function() {
        return TapMessage4.TITLE_STAGE + " " + this.m_GroupId + "-" + this.m_StageSubId;
      };
      TapStageTitle4.prototype.GetThemeId = function() {
        TapStageTitle4_1.x++;
        TapStageTitle4_1.x > 3 && (TapStageTitle4_1.x = 1);
        return TapStageTitle4_1.x;
      };
      var TapStageTitle4_1;
      TapStageTitle4.x = 2;
      TapStageTitle4 = TapStageTitle4_1 = __decorate([ ccclass ], TapStageTitle4);
      return TapStageTitle4;
    }();
    exports.TapStageTitle4 = TapStageTitle4;
    var TapMessage4 = function() {
      function TapMessage4() {}
      TapMessage4.TITLE_STAGE = "C\u1eeda ";
      TapMessage4.MSG_TAP_TO_START = "\u1ea4n \u0111\u1ec3 b\u1eaft \u0111\u1ea7u";
      TapMessage4.MSG_TAP_TO_RESUME = "\u1ea4n \u0111\u1ec3 ti\u1ebfp t\u1ee5c";
      TapMessage4.MSG_NOT_ENOUGH_GOLD = "Kh\xf4ng \u0111\u1ee7 v\xe0ng";
      TapMessage4.MSG_NOT_ENOUGH_GEM = "Kh\xf4ng \u0111\u1ee7 kim c\u01b0\u01a1ng";
      TapMessage4.MSG_UNLOCK_SK_BEFORE_UPGRADE = "H\xe3y m\u1edf kh\xf3a \xedt nh\u1ea5t 1 h\u1ed7 tr\u1ee3 \u0111\u1ec3 n\xe2ng c\u1ea5p!";
      TapMessage4.TUT_WELCOME = "Ch\xe0o m\u1eebng \u0111\u1ebfn v\u1edbi th\u1ebf gi\u1edbi c\u1ee7a c\xe1c H\u1ecfa \u1ea2nh \u0111\u1ea1i chi\u1ebfn. H\xe3y l\xe0m theo h\u01b0\u1edbng d\u1eabn \u0111\u1ec3 bi\u1ebft lu\u1eadt ch\u01a1i nh\xe9!";
      TapMessage4.TUT_ATK = "\u0110\u1ec3 t\u1ea5n c\xf4ng b\xean \u0111\u1ecbch, ch\u1ec9 c\u1ea7n \u1ea5n v\xe0o ch\xfang. Khi h\u1ea1 g\u1ee5c t\u01b0\u1edbng \u0111\u1ecbch s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c t\xe0i nguy\xean th\u01b0\u1edfng.";
      TapMessage4.TUT_HEAL = "Khi ch\u1ee7 t\u01b0\u1edbng b\u1ecb th\u01b0\u01a1ng, \u1ea5n v\xe0o ch\u1ee7 t\u01b0\u1edbng \u0111\u1ec3 h\u1ed3i m\xe1u. N\xe2ng c\u1ea5p \u0111\u1ec3 t\u0103ng l\u01b0\u1ee3ng m\xe1u c\xf3 th\u1ec3 h\u1ed3i ph\u1ee5c.";
      TapMessage4.TUT_BUFF = "C\xf3 c\xe1c b\xf9a k\xedch ho\u1ea1t \u0111\u1ec3 t\u0103ng s\u1ee9c m\u1ea1nh cho ch\u1ee7 t\u01b0\u1edbng v\xe0 h\u1ed7 tr\u1ee3 trong m\u1ed9t kho\u1ea3ng th\u1eddi gian. H\xe3y s\u1eed d\u1ee5ng m\u1ed9t c\xe1ch kh\xf4n ngoan";
      TapMessage4.TUT_SUPPORT = "\u0110\xe2y l\xe0 n\u01a1i b\u1ea1n c\xf3 th\u1ec3 m\u1edf kh\xf3a v\xe0 n\xe2ng c\u1ea5p c\xe1c H\u1ecfa \u1ea3nh h\u1ed7 tr\u1ee3";
      TapMessage4.TUT_END = "Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh h\u01b0\u1edbng d\u1eabn ch\u01a1i. H\xe3y b\u1eaft \u0111\u1ea7u cu\u1ed9c phi\xeau l\u01b0u th\xf4i n\xe0o!";
      TapMessage4 = __decorate([ ccclass ], TapMessage4);
      return TapMessage4;
    }();
    exports.TapMessage4 = TapMessage4;
    cc._RF.pop();
  }, {
    "./BaseControler": "BaseControler",
    "./TapHeroInfo4": "TapHeroInfo4",
    "./TapStageInfo4": "TapStageInfo4"
  } ],
  TapHero4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2660UQ/r1GiZ1zieMCfOyK", "TapHero4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapDamageInfo4 = void 0;
    var BaseSkillController_1 = require("../Controller/BaseSkillController");
    var BaseSkillInfo_1 = require("../Controller/BaseSkillInfo");
    var HeroType4_1 = require("../Controller/HeroType4");
    var SceneBattle4Ctrl_1 = require("../Controller/SceneBattle4Ctrl");
    var TapBattle4_1 = require("../Controller/TapBattle4");
    var TapDbHero4_1 = require("../Controller/TapDbHero4");
    var TapHeroAI4_1 = require("../Controller/TapHeroAI4");
    var TapHpBar4_1 = require("../Controller/TapHpBar4");
    var GameDirection_1 = require("../GameDirection");
    var AbstractCharacterRendererController_1 = require("./AbstractCharacterRendererController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapHero4 = function(_super) {
      __extends(TapHero4, _super);
      function TapHero4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_AnimationAttack = "attack";
        _this.m_AnimationDie = "death";
        _this.m_AnimationIdle = "stand";
        _this.m_AnimationAppear = "move";
        _this.m_AnimationHit = "injured2";
        _this._heroLayerOrder = 0;
        _this.m_PointHpCap = 1e3;
        _this.m_PointHpCurrent = 1e3;
        _this.m_PointAttack = 10;
        _this.m_PointHealing = 10;
        _this._readyToAttack = false;
        _this._heroType = HeroType4_1.HeroType4.LEAD;
        _this._hpBar = null;
        _this._facingDirection = GameDirection_1.GameDirection.RIGHT;
        _this._countReadyAttack = 0;
        _this.isMove = false;
        return _this;
      }
      TapHero4_1 = TapHero4;
      TapHero4.prototype.onload = function() {
        this.m_transform = this.node;
      };
      TapHero4.prototype.start = function() {};
      Object.defineProperty(TapHero4.prototype, "HeroKey", {
        get: function() {
          return this._heroInfo.m_HeroKey;
        },
        enumerable: false,
        configurable: true
      });
      TapHero4.prototype.LoadHero = function(heroInfo, heroLevel) {
        var _this = this;
        this._heroInfo = heroInfo;
        console.log(heroInfo);
        var heroModelInfo = TapDbHero4_1.TapDbHeroModel4.Instance.GetHeroModel(heroInfo.m_HeroKey);
        this._skillController = BaseSkillController_1.BaseSkillController.GenSkillController(heroModelInfo.m_SkillInfo);
        this._skillController.m_DealingDamageTrigger = this.OnDealingDamage;
        console.log(this._skillController.m_DealingDamageTrigger);
        this._heroModelController = AbstractCharacterRendererController_1.default.GenCharacterController(this.m_TfModelContainer, heroModelInfo.m_ModelInfo);
        this.scheduleOnce(function() {
          _this._heroModelController.AnimationFinishHandler = function(res) {
            _this.OnAnimationFinish(res);
          };
          _this._heroModelController.SetBaseScale(1);
          _this._heroModelController.SetCustomScale(heroInfo.m_ModelScale);
          _this.SetHeroLayerOrder(100);
          _this.CalculatePoint(heroLevel);
          _this._readyToAttack = true;
        }, .5);
      };
      Object.defineProperty(TapHero4.prototype, "ReadyToAttack", {
        get: function() {
          return this._readyToAttack;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TapHero4.prototype, "HeroType", {
        get: function() {
          return this._heroType;
        },
        set: function(value) {
          var _this = this;
          this._heroType = value;
          if (this._heroType == HeroType4_1.HeroType4.ENEMY || this._heroType == HeroType4_1.HeroType4.LEAD) {
            var goGroupBar = SceneBattle4Ctrl_1.default.Instance.GroupHpBar;
            null != goGroupBar && TapHpBar4_1.default.InstantiateOne(goGroupBar, function(res) {
              _this._hpBar = res;
              var posBar = _this.HeroType == HeroType4_1.HeroType4.ENEMY ? SceneBattle4Ctrl_1.default.Instance.enemyPoint.getPosition() : SceneBattle4Ctrl_1.default.Instance.heroPoint.getPosition();
              console.error("HeroType", posBar);
              _this._hpBar.node.setPosition(new cc.Vec2(posBar.x, posBar.y + 200));
            });
          }
          if (this._heroType == HeroType4_1.HeroType4.SIDEKICK || this._heroType == HeroType4_1.HeroType4.ENEMY) {
            this._ai = new TapHeroAI4_1.default(this);
            this._ai.SetMindState(TapHeroAI4_1.default.STATE_IDLE);
          }
        },
        enumerable: false,
        configurable: true
      });
      TapHero4.prototype.SetHeroTarget = function(hero) {
        this._heroTarget = hero;
      };
      TapHero4.prototype.SetAiIdle = function() {
        this._ai.SetMindState(TapHeroAI4_1.default.STATE_IDLE);
      };
      TapHero4.prototype.SetAiFight = function() {
        this._ai.SetMindState(TapHeroAI4_1.default.STATE_BATTLE);
      };
      TapHero4.prototype.GetHeroInfo = function() {
        return this._heroInfo;
      };
      TapHero4.prototype.CalculatePoint = function(level) {
        this.m_PointAttack = this._heroInfo.CalculateAttackPoint(level);
        this.m_PointHpCap = this._heroInfo.CalculateHpPoint(level);
        this.m_PointHealing = this._heroInfo.CalculateHealingPoint(level);
        this.m_PointHpCurrent = this.m_PointHpCap;
        this.UpdateHpBar();
      };
      TapHero4.prototype.UpdatePoint = function(level) {
        this.m_PointAttack = this._heroInfo.CalculateAttackPoint(level);
        this.m_PointHpCap = this._heroInfo.CalculateHpPoint(level);
        this.m_PointHealing = this._heroInfo.CalculateHealingPoint(level);
      };
      TapHero4.prototype.TakeDamage = function(dmg) {
        this.m_PointHpCurrent -= dmg;
        this.m_PointHpCurrent < 0 && (this.m_PointHpCurrent = 0);
        this.UpdateHpBar();
        this.m_PointHpCurrent <= 0 && this.Die();
      };
      TapHero4.prototype.HealingHp = function() {
        this.m_PointHpCurrent += this.m_PointHealing;
        this.m_PointHpCurrent > this.m_PointHpCap && (this.m_PointHpCurrent = this.m_PointHpCap);
        this.UpdateHpBar();
        return this.m_PointHealing;
      };
      TapHero4.prototype.IsDeath = function() {
        return this.m_PointHpCurrent <= 0;
      };
      TapHero4.prototype.UpdateHpBar = function() {
        if (this.m_PointHpCap > 0) {
          var value = 1 * this.m_PointHpCurrent / this.m_PointHpCap;
          null != this._hpBar && this._hpBar.SetValue(value);
        }
      };
      TapHero4.prototype.SetPosition = function(pos) {
        this.node.setPosition(pos);
      };
      TapHero4.prototype.OnDealingDamage = function(targetInfo) {
        var dmgInfo = targetInfo.m_Tag;
        console.error("---- cause damage:" + targetInfo.m_Tag);
        null != SceneBattle4Ctrl_1.default.Instance && SceneBattle4Ctrl_1.default.Instance.ProcessHeroDamage(dmgInfo.m_HeroHit, dmgInfo.m_Damage);
      };
      TapHero4.prototype.SetHeroLayerOrder = function(order) {
        this._heroLayerOrder = order;
        this._heroModelController.SetLayerOrder(this._heroLayerOrder);
      };
      TapHero4.prototype.SetHeroScale = function(heroScale) {
        var _a, _b;
        null === (_a = this._heroModelController) || void 0 === _a ? void 0 : _a.SetCustomScale(heroScale);
        null === (_b = this._skillController) || void 0 === _b ? void 0 : _b.SetCustomScale(heroScale);
      };
      Object.defineProperty(TapHero4.prototype, "m_Direction", {
        get: function() {
          return this._facingDirection;
        },
        enumerable: false,
        configurable: true
      });
      TapHero4.prototype.SetFacing = function(facing) {
        var _a, _b;
        this._facingDirection = facing;
        null === (_a = this._heroModelController) || void 0 === _a ? void 0 : _a.SetFacing(facing);
        null === (_b = this._skillController) || void 0 === _b ? void 0 : _b.SetFacing(facing);
      };
      TapHero4.prototype.OnAnimationFinish = function(aniName) {
        null != this.m_actionComplte && this.m_actionComplte(aniName);
        if (aniName == this.m_AnimationDie) {
          this._heroModelController.HideModel();
          null != this._hpBar && this._hpBar.Dispose();
        } else "attack" == aniName || "skill" == aniName ? this.Idle() : aniName == this.m_AnimationAppear ? this.Idle() : aniName == this.m_AnimationHit && this.Idle();
      };
      TapHero4.InstantiateHero = function(tfHeroContainer, heroInfo, callback, heroLevel, type) {
        void 0 === heroLevel && (heroLevel = 1);
        void 0 === type && (type = HeroType4_1.HeroType4.LEAD);
        var path = "/Prefabs/Battle/TapHero4";
        cc.loader.loadRes(path, function(err, pre) {
          var prefab = pre;
          var goHero = cc.instantiate(prefab);
          goHero.parent = tfHeroContainer;
          goHero.setPosition(cc.Vec2.ZERO);
          var tapHero = goHero.getComponent(TapHero4_1);
          tapHero.HeroType = type;
          tapHero.LoadHero(heroInfo, heroLevel);
          callback(goHero);
        });
      };
      TapHero4.prototype.GetPosition = function() {
        var tmp = this.node.position;
        return tmp;
      };
      TapHero4.prototype.GetHitPoint = function() {
        var posStanding = this.GetPosition();
        var offset = new cc.Vec2(.4 * Math.random() - .2, 1.2 + 1.4 * Math.random());
        return new cc.Vec2(posStanding.x + offset.x, posStanding.y + offset.y);
      };
      TapHero4.prototype.GetHpBarPoint = function() {
        var posStanding = this.GetPosition();
        return new cc.Vec2(posStanding.x, posStanding.y + 4);
      };
      TapHero4.prototype.TryToMakeAttack = function() {
        this.ReadyToAttack && this.Attack();
      };
      TapHero4.prototype.Attack = function(mActionComplete) {
        void 0 === mActionComplete && (mActionComplete = null);
        this._readyToAttack = false;
        this.m_actionComplte = mActionComplete;
        if (null != this._heroModelController) {
          this._heroModelController.PlayAnimationOnce(this.m_AnimationAttack);
          var pointCast = this.GetPosition();
          var args = new BaseSkillInfo_1.SkillTargetArgs();
          var posHit = cc.Vec2.ZERO;
          null != this._heroTarget && (posHit = this._heroTarget.GetHitPoint());
          var scaleAtk = 1;
          switch (this.HeroType) {
           case HeroType4_1.HeroType4.LEAD:
           case HeroType4_1.HeroType4.SIDEKICK:
          }
          console.error("Attack", this._heroTarget);
          var skillinfo = new BaseSkillInfo_1.SkillTargetInfo();
          skillinfo.m_TargetPosition = posHit;
          skillinfo.m_Tag = new TapDamageInfo4(this.m_PointAttack * scaleAtk, this._heroTarget);
          args.AddTarget(skillinfo);
          this._skillController.PlaySkill(new cc.Vec2(pointCast.x, pointCast.y), args);
        }
      };
      TapHero4.prototype.Hit = function() {
        var _this = this;
        this.scheduleOnce(function() {
          null != _this._heroModelController && _this._heroModelController.PlayAnimationOnce(_this.m_AnimationHit);
        }, .1);
      };
      TapHero4.prototype.Die = function() {
        null != this._heroModelController && this._heroModelController.PlayAnimationOnce(this.m_AnimationDie);
      };
      TapHero4.prototype.Appear = function() {
        null != this._heroModelController && this._heroModelController.PlayAnimationOnce(this.m_AnimationAppear);
      };
      TapHero4.prototype.Idle = function() {
        null != this._heroModelController && this._heroModelController.PlayAnimationLoop(this.m_AnimationIdle);
      };
      TapHero4.prototype.DestroyHero = function() {
        var _a, _b;
        null === (_a = this._heroModelController) || void 0 === _a ? void 0 : _a.DestroyModel();
        null === (_b = this._skillController) || void 0 === _b ? void 0 : _b.DestroySkill();
        this.node.parent.removeChild(this.node);
      };
      TapHero4.prototype.UpdateAI = function(deltaTime) {
        var _a;
        this.UpdateMove(deltaTime);
        null === (_a = this._ai) || void 0 === _a ? void 0 : _a.Ticks(deltaTime);
      };
      TapHero4.prototype.update = function(dt) {
        var _a, _b;
        this.UpdateMove(dt);
        if (null == TapBattle4_1.default.Instance) return;
        if (!this._readyToAttack && !TapBattle4_1.default.Instance.onPause && null != this._heroInfo) {
          this._countReadyAttack += dt;
          if (this._countReadyAttack > this._heroInfo.m_SkillCooldown) {
            this._countReadyAttack = 0;
            this._readyToAttack = true;
          }
        }
        null === (_a = this._heroModelController) || void 0 === _a ? void 0 : _a.Ticks(dt);
        null === (_b = this._skillController) || void 0 === _b ? void 0 : _b.Ticks(dt);
      };
      TapHero4.prototype.UpdateMove = function(deltime) {
        if (this.isMove) {
          var v2 = new cc.Vec2(this.node.position.x, this.node.position.y);
          var tem = new cc.Vec2(.4 * (this.movetoPost.x - v2.x) * deltime, .4 * (this.movetoPost.y - v2.y) * deltime);
          var postmove = tem;
          this.node.setPosition(this.node.position.x + postmove.x, this.node.position.y);
          if (Math.abs(this.node.position.x - this.movetoPost.x) < 100) {
            this.isMove = false;
            null != this.mCompleteMove && this.mCompleteMove();
          }
        }
      };
      TapHero4.prototype.findEnemy = function(enemy, m_complete) {
        var m_Enemy = enemy.getChildByName("TapHero4");
        console.log(m_Enemy);
        var m_direction = this.getDirectionMove(m_Enemy.getPosition());
        this.SetFacing(m_direction);
        if (null != this._heroModelController) {
          var m_postmove = new cc.Vec2(m_direction == GameDirection_1.GameDirection.LEFT ? m_Enemy.getPosition().x + 10 : m_Enemy.getPosition().x - 1, m_Enemy.getPosition().y);
          this._heroModelController.PlayAnimationLoop(this.m_AnimationAppear);
          this.movePost(m_postmove, function() {
            null != m_complete && m_complete();
          });
        }
      };
      TapHero4.prototype.getDirectionMove = function(mPost) {
        var _posX = this.node.getPosition().x + mPost.x;
        return _posX >= 0 ? GameDirection_1.GameDirection.RIGHT : GameDirection_1.GameDirection.LEFT;
      };
      TapHero4.prototype.movePost = function(_post, _mComplete) {
        this.mCompleteMove = _mComplete;
        this.movetoPost = _post;
        null != this._heroModelController && this._heroModelController.PlayAnimationLoop(this.m_AnimationAppear);
        this.isMove = true;
      };
      var TapHero4_1;
      __decorate([ property(cc.Node) ], TapHero4.prototype, "m_TfModelContainer", void 0);
      __decorate([ property(cc.Node) ], TapHero4.prototype, "m_transform", void 0);
      TapHero4 = TapHero4_1 = __decorate([ ccclass ], TapHero4);
      return TapHero4;
    }(cc.Component);
    exports.default = TapHero4;
    var TapDamageInfo4 = function() {
      function TapDamageInfo4(damage, hero) {
        this.m_Damage = 0;
        this.m_Damage = damage;
        this.m_HeroHit = hero;
      }
      return TapDamageInfo4;
    }();
    exports.TapDamageInfo4 = TapDamageInfo4;
    cc._RF.pop();
  }, {
    "../Controller/BaseSkillController": "BaseSkillController",
    "../Controller/BaseSkillInfo": "BaseSkillInfo",
    "../Controller/HeroType4": "HeroType4",
    "../Controller/SceneBattle4Ctrl": "SceneBattle4Ctrl",
    "../Controller/TapBattle4": "TapBattle4",
    "../Controller/TapDbHero4": "TapDbHero4",
    "../Controller/TapHeroAI4": "TapHeroAI4",
    "../Controller/TapHpBar4": "TapHpBar4",
    "../GameDirection": "GameDirection",
    "./AbstractCharacterRendererController": "AbstractCharacterRendererController"
  } ],
  TapHeroAI4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7bfazvxyFHGaNiXKJHKR9E", "TapHeroAI4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapHeroAI4 = function() {
      function TapHeroAI4(tapHero) {
        this.m_MindState = TapHeroAI4_1.STATE_IDLE;
        this._tapHero = tapHero;
      }
      TapHeroAI4_1 = TapHeroAI4;
      TapHeroAI4.prototype.SetMindState = function(state) {
        this.m_MindState = state;
      };
      TapHeroAI4.prototype.UpdateIdleState = function(deltaTime) {};
      TapHeroAI4.prototype.UpdateBattleState = function(deltaTime) {
        cc.log(this._tapHero.ReadyToAttack);
        this._tapHero.ReadyToAttack && this._tapHero.Attack();
      };
      TapHeroAI4.prototype.Ticks = function(deltaTime) {
        this.m_MindState == TapHeroAI4_1.STATE_IDLE ? this.UpdateIdleState(deltaTime) : this.m_MindState == TapHeroAI4_1.STATE_BATTLE && this.UpdateBattleState(deltaTime);
      };
      var TapHeroAI4_1;
      TapHeroAI4.STATE_IDLE = 1;
      TapHeroAI4.STATE_BATTLE = 2;
      TapHeroAI4 = TapHeroAI4_1 = __decorate([ ccclass ], TapHeroAI4);
      return TapHeroAI4;
    }();
    exports.default = TapHeroAI4;
    cc._RF.pop();
  }, {} ],
  TapHeroInfo4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa122yi13BI1K6f0eA/BPoJ", "TapHeroInfo4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapHeroInfo4 = function() {
      function TapHeroInfo4() {
        this.m_HeroKey = 1;
        this.m_HpBase = 1e3;
        this.m_AtkBase = 10;
        this.m_HpScale = 1;
        this.m_AtkScale = 2;
        this.m_ModelScale = 1;
        this.m_Speed = 10;
        this.m_SpeedScale = 1;
        this.m_GemUnlock = 100;
        this.m_Healing = 100;
        this.m_HealingScale = 20;
        this.m_SkillCooldown = 2;
      }
      TapHeroInfo4_1 = TapHeroInfo4;
      TapHeroInfo4.Sample = function() {
        var ret = new TapHeroInfo4_1();
        return ret;
      };
      TapHeroInfo4.prototype.CalculateAttackPoint = function(level) {
        return this.m_AtkBase + this.m_AtkScale * level;
      };
      TapHeroInfo4.prototype.CalculateHpPoint = function(level) {
        return this.m_HpBase + this.m_HpScale * level;
      };
      TapHeroInfo4.prototype.CalculateSpeedPoint = function(level) {
        return this.m_Speed + this.m_SpeedScale * level;
      };
      TapHeroInfo4.prototype.CalculateHealingPoint = function(level) {
        return this.m_Healing + this.m_HealingScale * level;
      };
      var TapHeroInfo4_1;
      TapHeroInfo4 = TapHeroInfo4_1 = __decorate([ ccclass ], TapHeroInfo4);
      return TapHeroInfo4;
    }();
    exports.default = TapHeroInfo4;
    cc._RF.pop();
  }, {} ],
  TapHpBar4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11281cTjFNGdLDO0FO8zMCh", "TapHpBar4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapHpBar4 = function(_super) {
      __extends(TapHpBar4, _super);
      function TapHpBar4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_SliderHp = null;
        return _this;
      }
      TapHpBar4_1 = TapHpBar4;
      TapHpBar4.prototype.SetValue = function(value) {
        value > 1 && (value = 1);
        value < 0 && (value = 0);
        this.m_SliderHp.progress = value;
      };
      TapHpBar4.InstantiateOne = function(tfParent, callback) {
        cc.loader.loadRes("/Prefabs/Battle/TapHpBar4", function(err, prefa) {
          var prefab = prefa;
          var goBar = cc.instantiate(prefab);
          goBar.parent = tfParent;
          var hpBar = goBar.getComponent(TapHpBar4_1);
          callback(hpBar);
        });
      };
      TapHpBar4.prototype.SetPosition = function(pos) {
        console.log(pos);
        this.node.setAnchorPoint(pos);
      };
      TapHpBar4.prototype.Dispose = function() {
        this.node.parent.removeChild(this.node);
      };
      var TapHpBar4_1;
      __decorate([ property(cc.ProgressBar) ], TapHpBar4.prototype, "m_SliderHp", void 0);
      TapHpBar4 = TapHpBar4_1 = __decorate([ ccclass ], TapHpBar4);
      return TapHpBar4;
    }(cc.Component);
    exports.default = TapHpBar4;
    cc._RF.pop();
  }, {} ],
  TapItemLoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d66367+l1dJ04IrtxB/eW87", "TapItemLoot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapItemLoot = function(_super) {
      __extends(TapItemLoot, _super);
      function TapItemLoot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_ReadyToReused = true;
        _this.m_GravityAcceleration = -1200;
        _this.m_Vx = 0;
        _this.m_Vy = 0;
        _this.m_CurrentX = 0;
        _this.m_CurrentY = 0;
        _this.m_InitVx = 0;
        _this.m_InitVy = 0;
        _this.m_YGround = 1;
        return _this;
      }
      TapItemLoot.prototype.onload = function() {
        this.m_Transform = this.node;
      };
      TapItemLoot.prototype.start = function() {};
      TapItemLoot.prototype.ScaleChanged = function(scale) {
        this.node.scale = scale;
      };
      TapItemLoot.prototype.SetSprite = function(sprite) {
        this.m_ImageItem.spriteFrame = sprite;
      };
      TapItemLoot.prototype.SetPosition = function(pos) {
        this.node.setPosition(pos);
        this.node.scale = 1;
        this.m_CurrentX = pos.x;
        this.m_CurrentY = pos.y;
      };
      TapItemLoot.prototype.BlashOut = function(yGround, velocity) {
        this.m_YGround = yGround;
        this.m_ReadyToReused = false;
        this.MakeBounceUp(velocity);
      };
      TapItemLoot.prototype.MakeBounceUp = function(vInit) {
        this.m_InitVx = vInit.x;
        this.m_InitVy = vInit.y;
        this.m_Vx = this.m_InitVx;
        this.m_Vy = this.m_InitVy;
      };
      TapItemLoot.prototype.update = function(dt) {
        var _this = this;
        if (Math.abs(this.m_Vx) > 0) {
          var delta = dt;
          var offsetX = this.m_Vx * delta;
          var offsetY = this.m_Vy * delta;
          this.m_Vy += this.m_GravityAcceleration * delta;
          this.m_CurrentX = this.m_CurrentX + offsetX;
          this.m_CurrentY = this.m_CurrentY + offsetY;
          this.node.setPosition(new cc.Vec2(this.m_CurrentX, this.m_CurrentY));
          var isMovingDown = offsetY < 0;
          if (isMovingDown && this.m_CurrentY <= this.m_YGround) {
            var factorX = .6;
            var factorY = .7;
            var newVx = factorX * this.m_InitVx;
            var newVy = factorY * this.m_InitVy;
            if (Math.abs(newVx) < 30) {
              this.m_Vx = 0;
              this.m_Vy = 0;
              this.scheduleOnce(function() {
                _this.m_ReadyToReused = true;
              }, .3);
            } else this.MakeBounceUp(new cc.Vec2(newVx, newVy));
          }
        }
      };
      __decorate([ property(cc.Sprite) ], TapItemLoot.prototype, "m_ImageItem", void 0);
      TapItemLoot = __decorate([ ccclass ], TapItemLoot);
      return TapItemLoot;
    }(cc.Component);
    exports.default = TapItemLoot;
    cc._RF.pop();
  }, {} ],
  TapMessage4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "865380CB6VEaY5V7GsExAPW", "TapMessage4");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapMessage4 = void 0;
    var TapMessage4 = function() {
      function TapMessage4() {}
      TapMessage4.TITLE_STAGE = "C\u1eeda ";
      TapMessage4.MSG_TAP_TO_START = "\u1ea4n \u0111\u1ec3 b\u1eaft \u0111\u1ea7u";
      TapMessage4.MSG_TAP_TO_RESUME = "\u1ea4n \u0111\u1ec3 ti\u1ebfp t\u1ee5c";
      TapMessage4.MSG_NOT_ENOUGH_GOLD = "Kh\xf4ng \u0111\u1ee7 v\xe0ng";
      TapMessage4.MSG_NOT_ENOUGH_GEM = "Kh\xf4ng \u0111\u1ee7 kim c\u01b0\u01a1ng";
      TapMessage4.MSG_UNLOCK_SK_BEFORE_UPGRADE = "H\xe3y m\u1edf kh\xf3a \xedt nh\u1ea5t 1 h\u1ed7 tr\u1ee3 \u0111\u1ec3 n\xe2ng c\u1ea5p!";
      TapMessage4.TUT_WELCOME = "Ch\xe0o m\u1eebng \u0111\u1ebfn v\u1edbi th\u1ebf gi\u1edbi c\u1ee7a c\xe1c H\u1ecfa \u1ea2nh \u0111\u1ea1i chi\u1ebfn. H\xe3y l\xe0m theo h\u01b0\u1edbng d\u1eabn \u0111\u1ec3 bi\u1ebft lu\u1eadt ch\u01a1i nh\xe9!";
      TapMessage4.TUT_ATK = "\u0110\u1ec3 t\u1ea5n c\xf4ng b\xean \u0111\u1ecbch, ch\u1ec9 c\u1ea7n \u1ea5n v\xe0o ch\xfang. Khi h\u1ea1 g\u1ee5c t\u01b0\u1edbng \u0111\u1ecbch s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c t\xe0i nguy\xean th\u01b0\u1edfng.";
      TapMessage4.TUT_HEAL = "Khi ch\u1ee7 t\u01b0\u1edbng b\u1ecb th\u01b0\u01a1ng, \u1ea5n v\xe0o ch\u1ee7 t\u01b0\u1edbng \u0111\u1ec3 h\u1ed3i m\xe1u. N\xe2ng c\u1ea5p \u0111\u1ec3 t\u0103ng l\u01b0\u1ee3ng m\xe1u c\xf3 th\u1ec3 h\u1ed3i ph\u1ee5c.";
      TapMessage4.TUT_BUFF = "C\xf3 c\xe1c b\xf9a k\xedch ho\u1ea1t \u0111\u1ec3 t\u0103ng s\u1ee9c m\u1ea1nh cho ch\u1ee7 t\u01b0\u1edbng v\xe0 h\u1ed7 tr\u1ee3 trong m\u1ed9t kho\u1ea3ng th\u1eddi gian. H\xe3y s\u1eed d\u1ee5ng m\u1ed9t c\xe1ch kh\xf4n ngoan";
      TapMessage4.TUT_SUPPORT = "\u0110\xe2y l\xe0 n\u01a1i b\u1ea1n c\xf3 th\u1ec3 m\u1edf kh\xf3a v\xe0 n\xe2ng c\u1ea5p c\xe1c H\u1ecfa \u1ea3nh h\u1ed7 tr\u1ee3";
      TapMessage4.TUT_END = "Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh h\u01b0\u1edbng d\u1eabn ch\u01a1i. H\xe3y b\u1eaft \u0111\u1ea7u cu\u1ed9c phi\xeau l\u01b0u th\xf4i n\xe0o!";
      return TapMessage4;
    }();
    exports.TapMessage4 = TapMessage4;
    cc._RF.pop();
  }, {} ],
  TapPanelFlyPoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db71eYCt+VHWJgvzlGCsg+h", "TapPanelFlyPoint");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TapPointFlyUp_1 = require("./TapPointFlyUp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPanelFlyPoint = function(_super) {
      __extends(TapPanelFlyPoint, _super);
      function TapPanelFlyPoint() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._listGoFlyPoint = new Array();
        return _this;
      }
      TapPanelFlyPoint_1 = TapPanelFlyPoint;
      TapPanelFlyPoint.prototype.start = function() {};
      TapPanelFlyPoint.prototype.ShowHealingPoint = function(pointValue, position) {
        this.ShowAPoint(pointValue, TapPanelFlyPoint_1.TYPE_HEALING, position);
      };
      TapPanelFlyPoint.prototype.ShowDamagePoint = function(pointValue, position) {
        cc.error("ShowDamagePoint" + pointValue + ":" + position);
        this.ShowAPoint(pointValue, TapPanelFlyPoint_1.TYPE_DAMAGE, position);
      };
      TapPanelFlyPoint.prototype.ShowAPoint = function(pointValue, type, position) {
        var _this = this;
        var goPoint = null;
        if (this._listGoFlyPoint.length > 0) {
          goPoint = this._listGoFlyPoint[0];
          this._listGoFlyPoint.splice(0, 1);
          this.makeShowPoint(goPoint, type, pointValue);
        } else TapPointFlyUp_1.default.InstanceOne(this.m_TfContainer, function(res) {
          goPoint = res;
          _this.makeShowPoint(goPoint, type, pointValue);
          goPoint.setPosition(position.x, position.y);
          console.error("InstanceOne", position.x);
        });
      };
      TapPanelFlyPoint.prototype.makeShowPoint = function(goPoint, type, pointValue) {
        var _this = this;
        goPoint.active = true;
        var tapPoint = goPoint.getComponent(TapPointFlyUp_1.default);
        tapPoint.m_AnimationFinishCb = function(goTmp) {
          goTmp.active = false;
          _this._listGoFlyPoint.push(goTmp);
        };
        var color = cc.Color.WHITE;
        color = type == TapPanelFlyPoint_1.TYPE_DAMAGE ? cc.Color.RED : cc.Color.GREEN;
        tapPoint.MakeAnimation(pointValue, color);
      };
      TapPanelFlyPoint.prototype.update = function(dt) {};
      var TapPanelFlyPoint_1;
      TapPanelFlyPoint.TYPE_HEALING = 1;
      TapPanelFlyPoint.TYPE_DAMAGE = 2;
      __decorate([ property({
        type: cc.Node
      }) ], TapPanelFlyPoint.prototype, "m_TfContainer", void 0);
      TapPanelFlyPoint = TapPanelFlyPoint_1 = __decorate([ ccclass ], TapPanelFlyPoint);
      return TapPanelFlyPoint;
    }(cc.Component);
    exports.default = TapPanelFlyPoint;
    cc._RF.pop();
  }, {
    "./TapPointFlyUp": "TapPointFlyUp"
  } ],
  TapPanelLoading4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32f2efBd/BO35JCJKhv5tm6", "TapPanelLoading4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ActionTimer_1 = require("./Utils/ActionTimer");
    var ShareCode_1 = require("./Utils/ShareCode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPanelLoading4 = function(_super) {
      __extends(TapPanelLoading4, _super);
      function TapPanelLoading4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._countLoading = 0;
        return _this;
      }
      TapPanelLoading4.prototype.start = function() {
        var _this = this;
        this._repeatCountLoading = new ActionTimer_1.default(.5, function() {
          _this._countLoading++;
          _this._countLoading > 3 && (_this._countLoading = 0);
          0 == _this._countLoading ? _this.m_TextLoading.string = "Loading" : 1 == _this._countLoading ? _this.m_TextLoading.string = "Loading." : 2 == _this._countLoading ? _this.m_TextLoading.string = "Loading.." : _this.m_TextLoading.string = "Loading...";
        });
      };
      TapPanelLoading4.prototype.update = function(dt) {
        var _a;
        null === (_a = this._repeatCountLoading) || void 0 === _a ? void 0 : _a.UpdateTimmer(dt);
      };
      TapPanelLoading4.prototype.ShowLoading = function(timeWait) {
        var _this = this;
        this.m_LoadingConten.active = true;
        new ShareCode_1.default(this, function() {
          _this.m_LoadingConten.active = false;
        }, timeWait).doIt();
      };
      TapPanelLoading4.prototype.HideLoading = function() {
        this.m_LoadingConten.active = false;
      };
      __decorate([ property(cc.Node) ], TapPanelLoading4.prototype, "m_LoadingConten", void 0);
      __decorate([ property(cc.Label) ], TapPanelLoading4.prototype, "m_TextLoading", void 0);
      TapPanelLoading4 = __decorate([ ccclass ], TapPanelLoading4);
      return TapPanelLoading4;
    }(cc.Component);
    exports.default = TapPanelLoading4;
    cc._RF.pop();
  }, {
    "./Utils/ActionTimer": "ActionTimer",
    "./Utils/ShareCode": "ShareCode"
  } ],
  TapPanelLoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e6eayEBnlJSLwAAfrdRgTv", "TapPanelLoot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CanvasHelper_1 = require("./CanvasHelper");
    var TapItemLoot_1 = require("./TapItemLoot");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPanelLoot = function(_super) {
      __extends(TapPanelLoot, _super);
      function TapPanelLoot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._listLootItem = new Array();
        return _this;
      }
      TapPanelLoot.prototype.start = function() {};
      TapPanelLoot.prototype.SetLootPosition = function(pointSpawning, pointGround) {
        CanvasHelper_1.default.SetPosition(this.m_GoPointSpawning, pointSpawning);
        CanvasHelper_1.default.SetPosition(this.m_GoPointGround, pointGround);
      };
      TapPanelLoot.prototype.PouringItems = function(numItem, spriteItem) {
        var _this = this;
        var pointSpawning = CanvasHelper_1.default.GetPosition(this.m_GoPointSpawning);
        var pointGround = CanvasHelper_1.default.GetPosition(this.m_GoPointGround);
        for (var i = 0; i < numItem; i++) {
          var delay = Math.random();
          this.scheduleOnce(function() {
            var lootItem = _this.GetFreeItem();
            lootItem.m_ReadyToReused = false;
            lootItem.node.active = true;
            lootItem.SetSprite(spriteItem);
            lootItem.SetPosition(pointSpawning);
            var vX = cc.math.randomRange(50, 250);
            var vY = cc.math.randomRange(200, 210);
            var rnd = cc.math.randomRangeInt(0, 100) > 50;
            rnd && (vX *= -1);
            var vItem = new cc.Vec2(vX, vY);
            lootItem.BlashOut(pointGround.y, vItem);
          }, delay);
        }
      };
      TapPanelLoot.prototype.GetFreeItem = function() {
        this._listLootItem.forEach(function(itm) {
          if (itm.m_ReadyToReused) return itm;
        });
        var goLoot = cc.instantiate(this.m_PrefabItemLoot);
        this.node.addChild(goLoot);
        var lootItem = goLoot.getComponent(TapItemLoot_1.default);
        this._listLootItem.push(lootItem);
        return lootItem;
      };
      TapPanelLoot.prototype.update = function(delta) {
        this._listLootItem.forEach(function(itm) {
          itm.m_ReadyToReused && itm.node.active && (itm.node.active = false);
        });
      };
      __decorate([ property(cc.Node) ], TapPanelLoot.prototype, "m_GoPointSpawning", void 0);
      __decorate([ property(cc.Node) ], TapPanelLoot.prototype, "m_GoPointGround", void 0);
      __decorate([ property(cc.Node) ], TapPanelLoot.prototype, "m_PrefabItemLoot", void 0);
      TapPanelLoot = __decorate([ ccclass ], TapPanelLoot);
      return TapPanelLoot;
    }(cc.Component);
    exports.default = TapPanelLoot;
    cc._RF.pop();
  }, {
    "./CanvasHelper": "CanvasHelper",
    "./TapItemLoot": "TapItemLoot"
  } ],
  TapPointFlyUp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "588a5LCNgNARpFM0ywWRnY4", "TapPointFlyUp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPointFlyUp = function(_super) {
      __extends(TapPointFlyUp, _super);
      function TapPointFlyUp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TapPointFlyUp.prototype.start = function() {};
      TapPointFlyUp.prototype.AnimationFlyDone = function() {
        var _a;
        null === (_a = this.m_AnimationFinishCb) || void 0 === _a ? void 0 : _a.call(this, this.node);
      };
      TapPointFlyUp.prototype.MakeAnimation = function(pointValue, color) {
        this.m_TextPoint.node.color = color;
        this.m_TextPoint.string = pointValue + "";
        this.PlayFly();
      };
      TapPointFlyUp.prototype.PlayFly = function() {
        this.m_Animator.play("TapPointFlyUp");
      };
      TapPointFlyUp.InstanceOne = function(tfParent, callback) {
        var _this = this;
        if (null == this.PrefabPoint) cc.loader.loadRes("/Prefabs/TapPointFlyUp", function(err, prefa) {
          _this.PrefabPoint = prefa;
          var goBar = cc.instantiate(_this.PrefabPoint);
          goBar.parent = tfParent;
          callback(goBar);
        }); else {
          var goBar = cc.instantiate(this.PrefabPoint);
          goBar.parent = tfParent;
          callback(goBar);
        }
      };
      TapPointFlyUp.prototype.update = function(dt) {};
      __decorate([ property(cc.Label) ], TapPointFlyUp.prototype, "m_TextPoint", void 0);
      __decorate([ property(cc.Animation) ], TapPointFlyUp.prototype, "m_Animator", void 0);
      TapPointFlyUp = __decorate([ ccclass ], TapPointFlyUp);
      return TapPointFlyUp;
    }(cc.Component);
    exports.default = TapPointFlyUp;
    cc._RF.pop();
  }, {} ],
  TapPopupFinger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4de8dVnSjhKnLayvf1LiFkY", "TapPopupFinger");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPopupFinger = function(_super) {
      __extends(TapPopupFinger, _super);
      function TapPopupFinger() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TapPopupFinger.prototype.onLoad = function() {
        this.m_OnClick = this.node;
      };
      TapPopupFinger.prototype.start = function() {
        this.goFinger.on(cc.Node.EventType.TOUCH_START, this.OnClick, this);
      };
      TapPopupFinger.prototype.OnClick = function(evt) {
        this.m_OnClick.emit("TapPopupFinger_click");
        this.CloseUIForm();
      };
      TapPopupFinger.prototype.LoadFinger = function(pathPrefabFinger, position) {
        this.goFinger.setPosition(position);
      };
      TapPopupFinger.prototype.update = function(dt) {};
      __decorate([ property(cc.Node) ], TapPopupFinger.prototype, "goFinger", void 0);
      TapPopupFinger = __decorate([ ccclass ], TapPopupFinger);
      return TapPopupFinger;
    }(BaseUIForm_1.default);
    exports.default = TapPopupFinger;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm"
  } ],
  TapPopupTutorial: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb823LRI+9KqpD8DlnXLT3p", "TapPopupTutorial");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapPopupTutorial = void 0;
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapPopupTutorial = function(_super) {
      __extends(TapPopupTutorial, _super);
      function TapPopupTutorial() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TapPopupTutorial.prototype.onLoad = function() {
        this.m_OnReadingTutorialCompleted = this.node;
      };
      TapPopupTutorial.prototype.start = function() {};
      TapPopupTutorial.prototype.LoadData = function(tutId, tutText) {
        this._tutId = tutId;
        console.error(tutId, tutText);
        this.m_TextTutorial.string = tutText;
      };
      TapPopupTutorial.prototype.ButtonNextClick = function() {
        this.CloseUIForm();
        this.m_OnReadingTutorialCompleted.emit("OnReadingTutorial", this._tutId);
      };
      __decorate([ property(cc.Label) ], TapPopupTutorial.prototype, "m_TextTutorial", void 0);
      TapPopupTutorial = __decorate([ ccclass ], TapPopupTutorial);
      return TapPopupTutorial;
    }(BaseUIForm_1.default);
    exports.TapPopupTutorial = TapPopupTutorial;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm"
  } ],
  TapSavingData4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5df29A3y8FFzqePnEOcum/p", "TapSavingData4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerPrefs = void 0;
    var Dictionary_1 = require("../Utils/Dictionary");
    var ConstantsFk4_1 = require("./ConstantsFk4");
    var HeroCtrl_1 = require("./HeroCtrl");
    var ItemsCtrl_1 = require("./ItemsCtrl");
    var QuestCtrl_1 = require("./QuestCtrl");
    var SkillCtrl_1 = require("./SkillCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapSavingData4 = function() {
      function TapSavingData4() {}
      TapSavingData4_1 = TapSavingData4;
      TapSavingData4.addEventUpdate = function(mObj, callback) {
        this.tableUpdate.ContainsKey(mObj.uuid) ? this.tableUpdate[mObj.uuid] = callback : this.tableUpdate.Add(mObj.uuid, callback);
      };
      TapSavingData4.removeAddEventUpdate = function(obj) {
        this.tableUpdate.ContainsKey(obj.uuid) && this.tableUpdate.Remove(obj.uuid);
      };
      TapSavingData4.Reset = function() {
        PlayerPrefs.setNumber(this.KEY_CURRENT_LEVEL, 0);
        PlayerPrefs.setNumber(this.KEY_HERO_LEAD_LEVEL, 1);
        PlayerPrefs.setNumber(this.KEY_SIDEKICK_LEVEL, 1);
        PlayerPrefs.setString(this.KEY_SIDEKICK_UNLOCKED, "");
        PlayerPrefs.setNumber(this.KEY_TUT_FINISH, 0);
        this.SavePlayerGold(ConstantsFk4_1.default.GOLD_START);
        this.SavePlayerGem(ConstantsFk4_1.default.GEM_START);
        cc.sys.localStorage.Save();
      };
      TapSavingData4.SetTutFinish = function() {
        PlayerPrefs.setNumber(this.KEY_TUT_FINISH, 1);
      };
      TapSavingData4.IsTutFinish = function() {
        return !!PlayerPrefs.HasKey(this.KEY_TUT_FINISH) && 1 == PlayerPrefs.getNumber(this.KEY_TUT_FINISH);
      };
      TapSavingData4.ChildCurrentStageId = function() {
        return cc.sys.localStorage.getItem(this.KEY_CHILD_CURRENT_LEVEL);
      };
      TapSavingData4.SaveCurrentChildIndex = function(lvIdx) {
        cc.sys.localStorage.SetInt(this.KEY_CHILD_CURRENT_LEVEL, lvIdx);
        cc.sys.localStorage.Save();
      };
      TapSavingData4.GetCurrentStageIndex = function() {
        var result = cc.sys.localStorage.getItem(this.KEY_CURRENT_LEVEL);
        null != result && void 0 != result || (result = 0);
        return result;
      };
      TapSavingData4.SaveCurrentStageIndex = function(lvIdx) {
        PlayerPrefs.setNumber(this.KEY_CURRENT_LEVEL, lvIdx);
      };
      TapSavingData4.GetHeroLeadLevel = function() {
        return cc.sys.localStorage.GetInt(this.KEY_HERO_LEAD_LEVEL, 1);
      };
      TapSavingData4.SaveHeroLeadLevel = function(level) {
        cc.sys.localStorage.SetInt(this.KEY_HERO_LEAD_LEVEL, level);
        cc.sys.localStorage.Save();
      };
      TapSavingData4.GetSidekickLevel = function() {
        return cc.sys.localStorage.getItem(this.KEY_SIDEKICK_LEVEL);
      };
      TapSavingData4.SaveSidekickLevel = function(level) {
        cc.sys.localStorage.setItem(this.KEY_SIDEKICK_LEVEL, level);
        cc.sys.localStorage.Save();
      };
      TapSavingData4.UnlockASidekick = function(heroKey) {
        var lstHerokey = this.GetListSidekickUnlocked();
        if (!lstHerokey.indexOf(heroKey)) {
          lstHerokey.push(heroKey);
          var jArr_1 = new Array();
          lstHerokey.forEach(function(tmp) {
            jArr_1.push(tmp);
          });
          cc.sys.localStorage.SetString(this.KEY_SIDEKICK_UNLOCKED, JSON.stringify(jArr_1));
          cc.sys.localStorage.Save();
        }
      };
      TapSavingData4.GetListSidekickUnlocked = function() {
        var lstHeroKey = new Array();
        var temp = this.getLevelHero();
        console.error(temp);
        temp.Keys.forEach(function(k) {
          temp.GetValues(k) > 0 && lstHeroKey.push(temp.GetValues(k));
        });
        return lstHeroKey;
      };
      TapSavingData4.SaveSoundSetting = function(soundOn) {
        cc.sys.localStorage.SetInt(this.KEY_SOUND, soundOn ? 1 : 0);
      };
      TapSavingData4.GetSoundSetting = function() {
        return 1 == cc.sys.localStorage.GetInt(this.KEY_SOUND, 1);
      };
      TapSavingData4.SaveMusicSetting = function(soundOn) {
        cc.sys.localStorage.SetInt(this.KEY_MUSIC, soundOn ? 1 : 0);
      };
      TapSavingData4.GetMusicSetting = function() {
        return 1 == cc.sys.localStorage.GetInt(this.KEY_MUSIC, 1);
      };
      TapSavingData4.SavePlayerGold = function(gold) {
        this.tableUpdate.Values.forEach(function(mValue) {
          mValue("GOLD", gold);
        });
        cc.sys.localStorage.setItem(this.KEY_PLAYER_GOLD, gold);
      };
      TapSavingData4.GetPlayerGold = function() {
        var result = cc.sys.localStorage.getItem(this.KEY_PLAYER_GOLD);
        null != result && void 0 != result || (result = ConstantsFk4_1.default.GOLD_START);
        return result;
      };
      TapSavingData4.GoldChange = function(gold) {
        var tmp = this.GetPlayerGold();
        tmp += gold;
        this.SavePlayerGold(tmp);
      };
      TapSavingData4.GemChange = function(gem) {
        var tmp = TapSavingData4_1.GetPlayerGem();
        tmp += gem;
        TapSavingData4_1.SavePlayerGem(tmp);
      };
      TapSavingData4.SavePlayerGem = function(gem) {
        this.tableUpdate.Values.forEach(function(mValue) {
          mValue("GEM", gem);
        });
        PlayerPrefs.setNumber(this.KEY_PLAYER_GEM, gem);
      };
      TapSavingData4.GetPlayerGem = function() {
        return 999999;
      };
      TapSavingData4.getItemUser = function() {
        return null != cc.sys.localStorage.getItem(this.KEY_ITEM) || void 0 != cc.sys.localStorage.getItem(this.KEY_ITEM) ? JSON.parse(cc.sys.localStorage.getItem(this.KEY_ITEM)) : new Array();
      };
      TapSavingData4.saveItemUser = function() {
        cc.sys.localStorage.SetString(this.KEY_ITEM, JSON.stringify(ItemsCtrl_1.ItemsCtrl.getInstancle().m_itemUser));
      };
      TapSavingData4.getLevelHero = function() {
        var result = new Dictionary_1.Dictionary();
        PlayerPrefs.HasKey(this.KEY_HERRO_LEVEL) && result.PareString(PlayerPrefs.getString(this.KEY_HERRO_LEVEL));
        return result;
      };
      TapSavingData4.setLevelHerro = function() {
        PlayerPrefs.setString(this.KEY_HERRO_LEVEL, JSON.stringify(HeroCtrl_1.default.getInstancle().m_heroLevels));
      };
      TapSavingData4.getAllQuestFinish = function() {
        return JSON.parse(cc.sys.localStorage.getItem(TapSavingData4_1.KEY_QUEST_FINISH));
      };
      TapSavingData4.setAllQuestFinish = function() {
        cc.sys.localStorage.SetString(this.KEY_QUEST_FINISH, JSON.stringify(QuestCtrl_1.QuestCtrl.getInstancle().m_questHaveGet));
      };
      TapSavingData4.GetSkillServer = function() {
        return JSON.parse(cc.sys.localStorage.getItem(this.KEY_SKILL_LEVEL));
      };
      TapSavingData4.SaveSkillServer = function() {
        cc.sys.localStorage.SetString(this.KEY_SKILL_LEVEL, JSON.stringify(SkillCtrl_1.SkillCtrl.getInstancle().m_SkillLevel));
      };
      TapSavingData4.GetSkillUse = function() {
        return JSON.parse(cc.sys.localStorage.getItem(this.KEY_SKILL_USE));
      };
      TapSavingData4.SaveSkillUse = function() {
        cc.sys.localStorage.SetString(this.KEY_SKILL_USE, JSON.stringify(SkillCtrl_1.SkillCtrl.getInstancle().m_skillUse));
      };
      var TapSavingData4_1;
      TapSavingData4.KEY_SKILL_USE = "key_skill_use";
      TapSavingData4.KEY_SKILL_LEVEL = "key_skill_level";
      TapSavingData4.KEY_CHILD_CURRENT_LEVEL = "tap4_key_child_level";
      TapSavingData4.KEY_CURRENT_LEVEL = "tap4_level";
      TapSavingData4.KEY_HERO_LEAD_LEVEL = "tap4_lead_level";
      TapSavingData4.KEY_SIDEKICK_LEVEL = "tap4_sk_level";
      TapSavingData4.KEY_SIDEKICK_UNLOCKED = "tap4_sk_unlocked";
      TapSavingData4.KEY_SUPPOR_HERRO_LEVEL = "key_suppor_herro_level";
      TapSavingData4.KEY_SOUND = "TAP4_SOUND";
      TapSavingData4.KEY_MUSIC = "TAP4_MUIC";
      TapSavingData4.KEY_PLAYER_GEM = "TAP4_GEM";
      TapSavingData4.KEY_PLAYER_GOLD = "TAP4_GOLD";
      TapSavingData4.KEY_ITEM = "KEY_ITEM";
      TapSavingData4.KEY_TUT_FINISH = "Tap4_Tut";
      TapSavingData4.KEY_HERRO_LEVEL = "key_herro_level";
      TapSavingData4.KEY_QUEST_FINISH = "key_quest_finish";
      TapSavingData4.tableUpdate = new Dictionary_1.Dictionary();
      TapSavingData4 = TapSavingData4_1 = __decorate([ ccclass ], TapSavingData4);
      return TapSavingData4;
    }();
    exports.default = TapSavingData4;
    var PlayerPrefs = function() {
      function PlayerPrefs() {}
      PlayerPrefs.HasKey = function(value) {
        var result = cc.sys.localStorage.getItem(value);
        return !("" == result || null == result || void 0 == result);
      };
      PlayerPrefs.DeleteKey = function(value) {
        cc.sys.localStorage.removeItem(value);
      };
      PlayerPrefs.getNumber = function(key) {
        if (PlayerPrefs.HasKey(key)) try {
          return Number.parseInt(cc.sys.localStorage.getItem(key));
        } catch (ex) {}
      };
      PlayerPrefs.getString = function(key) {
        if (PlayerPrefs.HasKey(key)) try {
          return cc.sys.localStorage.getItem(key);
        } catch (ex) {}
      };
      PlayerPrefs.setNumber = function(key, value) {
        try {
          cc.sys.localStorage.setItem(key, value);
        } catch (ex) {}
      };
      PlayerPrefs.setString = function(key, value) {
        try {
          console.error(key, value);
          cc.sys.localStorage.setItem(key, value);
        } catch (ex) {}
      };
      return PlayerPrefs;
    }();
    exports.PlayerPrefs = PlayerPrefs;
    cc._RF.pop();
  }, {
    "../Utils/Dictionary": "Dictionary",
    "./ConstantsFk4": "ConstantsFk4",
    "./HeroCtrl": "HeroCtrl",
    "./ItemsCtrl": "ItemsCtrl",
    "./QuestCtrl": "QuestCtrl",
    "./SkillCtrl": "SkillCtrl"
  } ],
  TapStageInfo4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16f484U6KBDKL1wABPGVpT3", "TapStageInfo4");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapStageInfo4 = function() {
      function TapStageInfo4(heroKey, level, isBoss) {
        void 0 === isBoss && (isBoss = false);
        this.m_StageIdx = 0;
        this.m_HeroKey = 1;
        this.m_HeroLevel = 1;
        this.m_IsBoss = false;
        this.m_StageIdx = TapStageInfo4_1._countStageIdx;
        this.m_HeroKey = heroKey;
        this.m_HeroLevel = level;
        this.m_IsBoss = isBoss;
        TapStageInfo4_1._countStageIdx++;
      }
      TapStageInfo4_1 = TapStageInfo4;
      var TapStageInfo4_1;
      TapStageInfo4._countStageIdx = 0;
      TapStageInfo4 = TapStageInfo4_1 = __decorate([ ccclass ], TapStageInfo4);
      return TapStageInfo4;
    }();
    exports.default = TapStageInfo4;
    cc._RF.pop();
  }, {} ],
  TapStateEndLose4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b704aN6RChP4pXKeqtFtIas", "TapStateEndLose4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateEndLose4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapBattle4_1 = require("../Controller/TapBattle4");
    var TapStateEndLose4 = function(_super) {
      __extends(TapStateEndLose4, _super);
      function TapStateEndLose4(tapBattle) {
        var _this = _super.call(this, tapBattle) || this;
        _this._countRest = 0;
        _this._onRest = false;
        _this._countWaitToReload = 0;
        _this._onWaitReloadLevel = false;
        return _this;
      }
      TapStateEndLose4.prototype.OnStateEnter = function() {
        this._tapBattle.m_HeroEnemy.SetAiIdle();
        this._tapBattle.m_ListHeroSk.forEach(function(heroSk) {
          heroSk.SetAiIdle();
        });
        this._onRest = true;
        this._countRest = 0;
      };
      TapStateEndLose4.prototype.OnStateExit = function() {};
      TapStateEndLose4.prototype.Ticks = function(deltaTime) {
        var timeWait = 2.5;
        if (this._onRest) {
          this._countRest += deltaTime;
          if (this._countRest > timeWait) {
            this._onRest = false;
            this._onWaitReloadLevel = true;
          }
        }
        if (this._onWaitReloadLevel) {
          this._countWaitToReload += deltaTime;
          if (this._countWaitToReload > timeWait) {
            this._onWaitReloadLevel = false;
            this._tapBattle.SetGameState(TapBattle4_1.default.STATE_REVIVE);
          }
        }
      };
      return TapStateEndLose4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateEndLose4 = TapStateEndLose4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../Controller/TapBattle4": "TapBattle4"
  } ],
  TapStateEndWin4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cedc83T66ZGbbUy38fzXLt7", "TapStateEndWin4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateEndWin4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var SceneBattle4Ctrl_1 = require("../Controller/SceneBattle4Ctrl");
    var TapBattle4_1 = require("../Controller/TapBattle4");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapStateEndWin4 = function(_super) {
      __extends(TapStateEndWin4, _super);
      function TapStateEndWin4(tapBattle) {
        var _this = _super.call(this, tapBattle) || this;
        _this._countRest = 0;
        _this._onRest = false;
        return _this;
      }
      TapStateEndWin4.prototype.OnStateEnter = function() {
        this._tapBattle.m_HeroEnemy.SetAiIdle();
        this._tapBattle.m_ListHeroSk.forEach(function(heroSk) {
          heroSk.SetAiIdle();
        });
        this._onRest = true;
        this._countRest = 0;
      };
      TapStateEndWin4.prototype.OnStateExit = function() {};
      TapStateEndWin4.prototype.Ticks = function(deltaTime) {
        if (this._onRest) {
          this._countRest += deltaTime;
          if (this._countRest > 4) {
            this._onRest = false;
            var currentStageIdx = TapSavingData4_1.default.GetCurrentStageIndex();
            var newTheme = (currentStageIdx + 1) % 10 == 0;
            console.error("SceneBattle4Ctrl.Instance.endBattle()", this._countRest, newTheme);
            if (!newTheme) {
              SceneBattle4Ctrl_1.default.Instance.endBattle();
              return;
            }
            this._tapBattle.SetGameState(TapBattle4_1.default.STATE_NEXT_THEME);
          }
        }
      };
      return TapStateEndWin4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateEndWin4 = TapStateEndWin4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../Controller/SceneBattle4Ctrl": "SceneBattle4Ctrl",
    "../Controller/TapBattle4": "TapBattle4",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  TapStateNextLevel4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b3aaOdSG1Np7XTn3p8yWvH", "TapStateNextLevel4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateNextLevel4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapStateNextLevel4 = function(_super) {
      __extends(TapStateNextLevel4, _super);
      function TapStateNextLevel4(tapBattle) {
        return _super.call(this, tapBattle) || this;
      }
      TapStateNextLevel4.prototype.OnStateEnter = function() {
        var currentStageIdx = TapSavingData4_1.default.GetCurrentStageIndex();
        currentStageIdx++;
        TapSavingData4_1.default.SaveCurrentStageIndex(currentStageIdx);
        console.error("------- Load next stage:" + currentStageIdx);
        this._tapBattle.LoadGameLevel(currentStageIdx, 1);
        this._tapBattle.m_HeroEnemy.Appear();
      };
      TapStateNextLevel4.prototype.OnStateExit = function() {};
      TapStateNextLevel4.prototype.Ticks = function(deltaTime) {};
      return TapStateNextLevel4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateNextLevel4 = TapStateNextLevel4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  TapStateNextTheme4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "922c6T6vsVGl7GYWvjkG4vZ", "TapStateNextTheme4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateNextTheme4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapBattle4_1 = require("../Controller/TapBattle4");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapStateNextTheme4 = function(_super) {
      __extends(TapStateNextTheme4, _super);
      function TapStateNextTheme4(tapBattle) {
        var _this = _super.call(this, tapBattle) || this;
        _this._countWaitToLoadNext = 0;
        _this._onWaitLoadNext = false;
        _this._onWaitNextTheme = false;
        _this._countWaitNextTheme = 0;
        return _this;
      }
      TapStateNextTheme4.prototype.OnStateEnter = function() {
        this._onWaitLoadNext = true;
        this._onWaitNextTheme = true;
      };
      TapStateNextTheme4.prototype.OnStateExit = function() {};
      TapStateNextTheme4.prototype.Ticks = function(deltaTime) {
        var timeWaitLoadNextTheme = 1;
        var timeWaitLoadNextLevel = 3;
        if (this._onWaitNextTheme) {
          this._countWaitNextTheme += deltaTime;
          if (this._countWaitNextTheme > timeWaitLoadNextTheme) {
            this._onWaitNextTheme = false;
            var currentStageIdx = TapSavingData4_1.default.GetCurrentStageIndex();
          }
        }
        if (this._onWaitLoadNext) {
          this._countWaitToLoadNext += deltaTime;
          if (this._countWaitToLoadNext > timeWaitLoadNextLevel) {
            this._onWaitLoadNext = false;
            this._tapBattle.SetGameState(TapBattle4_1.default.STATE_NEXT_LEVEL);
          }
        }
      };
      return TapStateNextTheme4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateNextTheme4 = TapStateNextTheme4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../Controller/TapBattle4": "TapBattle4",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  TapStatePlay4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e157U9a8pHSaaQhcg4ga7I", "TapStatePlay4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStatePlay4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapStatePlay4 = function(_super) {
      __extends(TapStatePlay4, _super);
      function TapStatePlay4(tapBattle) {
        return _super.call(this, tapBattle) || this;
      }
      TapStatePlay4.prototype.OnStateEnter = function() {
        var heroLead = this._tapBattle.m_HeroLead;
        var heroEnemy = this._tapBattle.m_HeroEnemy;
        var lstHeroSideKick = this._tapBattle.m_ListHeroSk;
        lstHeroSideKick.forEach(function(heroSk) {
          heroSk.SetHeroTarget(heroEnemy);
          heroSk.SetAiFight();
        });
        heroLead.SetHeroTarget(heroEnemy);
        heroEnemy.SetHeroTarget(heroLead);
        heroEnemy.SetAiFight();
      };
      TapStatePlay4.prototype.OnStateExit = function() {};
      TapStatePlay4.prototype.Ticks = function(deltaTime) {
        this._tapBattle.m_HeroEnemy.UpdateAI(deltaTime);
        this._tapBattle.m_ListHeroSk.forEach(function(heroSk) {
          heroSk.UpdateAI(deltaTime);
          heroSk.UpdateMove(deltaTime);
        });
      };
      return TapStatePlay4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStatePlay4 = TapStatePlay4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4"
  } ],
  TapStateRevive4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abe1faBuYlFPbZd8dTknFd6", "TapStateRevive4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateRevive4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapStateRevive4 = function(_super) {
      __extends(TapStateRevive4, _super);
      function TapStateRevive4(tapBattle) {
        return _super.call(this, tapBattle) || this;
      }
      TapStateRevive4.prototype.OnStateEnter = function() {
        var currentStageIdx = TapSavingData4_1.default.GetCurrentStageIndex();
        var reviveStageIdx = currentStageIdx / 10 * 10;
        TapSavingData4_1.default.SaveCurrentStageIndex(reviveStageIdx);
        this._tapBattle.ReviveGameLevel(reviveStageIdx, 1);
      };
      TapStateRevive4.prototype.OnStateExit = function() {};
      TapStateRevive4.prototype.Ticks = function(deltaTime) {};
      return TapStateRevive4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateRevive4 = TapStateRevive4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  TapStateStart4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40f3cYa43pAnqdNM87SeBsR", "TapStateStart4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateStart4 = void 0;
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapStateStart4 = function(_super) {
      __extends(TapStateStart4, _super);
      function TapStateStart4(tapBattle) {
        return _super.call(this, tapBattle) || this;
      }
      TapStateStart4.prototype.OnStateEnter = function() {
        this._tapBattle.FirstLoadGame();
      };
      TapStateStart4.prototype.OnStateExit = function() {};
      TapStateStart4.prototype.Ticks = function(deltaTime) {};
      return TapStateStart4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateStart4 = TapStateStart4;
    cc._RF.pop();
  }, {
    "../Controller/AbstractGameState4": "AbstractGameState4"
  } ],
  TapStateTutorial4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d2feethhhIv6VyYz1caPa2", "TapStateTutorial4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TapStateTutorial4 = void 0;
    var UIManager_1 = require("../../UIFramework/UIManager");
    var ConstDefine_1 = require("../ConstDefine");
    var AbstractGameState4_1 = require("../Controller/AbstractGameState4");
    var TapBattle4_1 = require("../Controller/TapBattle4");
    var TapGameData4Ctrl_1 = require("../Controller/TapGameData4Ctrl");
    var ConstantsFk4_1 = require("../ctrl/ConstantsFk4");
    var TapSavingData4_1 = require("../ctrl/TapSavingData4");
    var TapStateTutorial4 = function(_super) {
      __extends(TapStateTutorial4, _super);
      function TapStateTutorial4(tapBattle) {
        var _this = _super.call(this, tapBattle) || this;
        _this.TUTORIAL_WELCOME = 1;
        _this.TUTORIAL_ATTACK = 2;
        _this.TUTORIAL_HEALING = 3;
        _this.TUTORIAL_SUPPORT = 4;
        _this.TUTORIAL_FINISH = 5;
        _this.instancle = _this;
        return _this;
      }
      TapStateTutorial4.prototype.OnStateEnter = function() {
        var heroLead = this._tapBattle.m_HeroLead;
        var heroEnemy = this._tapBattle.m_HeroEnemy;
        heroLead.SetHeroTarget(heroEnemy);
        this.LoadTutorial(this.TUTORIAL_WELCOME);
        TapSavingData4_1.default.SetTutFinish();
      };
      TapStateTutorial4.prototype.LoadTutorial = function(tutId) {
        var _this = this;
        var pathPrefab = ConstantsFk4_1.default.PATH_ROOT + "/Prefabs/PopupTutorial4";
        console.error("load tiep ne", tutId);
        UIManager_1.default.GetInstance().ShowUIForm(ConstDefine_1.default.TAPPOPUP, function(res) {
          var popTut = res;
          popTut.m_OnReadingTutorialCompleted.on("OnReadingTutorial", _this.OnReadTextCompleted, _this);
          popTut.LoadData(tutId, _this.GetTextTutorial(tutId));
        });
      };
      TapStateTutorial4.prototype.GetTextTutorial = function(tutId) {
        var ret = "";
        switch (tutId) {
         case this.TUTORIAL_WELCOME:
          ret = TapGameData4Ctrl_1.TapMessage4.TUT_WELCOME;
          break;

         case this.TUTORIAL_ATTACK:
          ret = TapGameData4Ctrl_1.TapMessage4.TUT_ATK;
          break;

         case this.TUTORIAL_HEALING:
          ret = TapGameData4Ctrl_1.TapMessage4.TUT_HEAL;
          break;

         case this.TUTORIAL_SUPPORT:
          ret = TapGameData4Ctrl_1.TapMessage4.TUT_SUPPORT;
          break;

         case this.TUTORIAL_FINISH:
          ret = TapGameData4Ctrl_1.TapMessage4.TUT_END;
        }
        return ret;
      };
      TapStateTutorial4.prototype.OnReadTextCompleted = function(tutId) {
        var _this = this;
        console.error(tutId);
        if (1 == tutId) this.LoadTutorial(this.TUTORIAL_ATTACK); else if (tutId == this.TUTORIAL_ATTACK) UIManager_1.default.GetInstance().ShowUIForm(ConstDefine_1.default.TAPPOPUPFINGER, function(ur, res) {
          var popFinger = ur;
          var post = _this._tapBattle.GetPosFingerEnemy();
          console.error("UIManager.GetInstance().ShowUIForm", post);
          popFinger.LoadFinger(tutId.toString(), post);
          popFinger.m_OnClick.on("TapPopupFinger_click", function() {
            _this._tapBattle.OnHeroEnemyClick();
            _this.LoadTutorial(_this.TUTORIAL_HEALING);
          });
        }); else if (tutId == this.TUTORIAL_HEALING) {
          cc.error("this.TUTORIAL_HEALING", tutId == this.TUTORIAL_HEALING);
          UIManager_1.default.GetInstance().ShowUIForm(ConstDefine_1.default.TAPPOPUPFINGER, function(ur, res) {
            var popFinger = ur;
            var post = _this._tapBattle.GetPosFingerLeadHero();
            console.error("UIManager.GetInstance().ShowUIForm", post);
            popFinger.LoadFinger(tutId.toString(), post);
            popFinger.m_OnClick.on("TapPopupFinger_click", function() {
              _this._tapBattle.OnHeroLeadClick();
              _this.LoadTutorial(_this.TUTORIAL_FINISH);
            });
          });
        } else tutId == this.TUTORIAL_SUPPORT || tutId == this.TUTORIAL_FINISH && this._tapBattle.SetGameState(TapBattle4_1.default.STATE_PLAY);
      };
      TapStateTutorial4.prototype.OnStateExit = function() {};
      TapStateTutorial4.prototype.Ticks = function(deltaTime) {};
      return TapStateTutorial4;
    }(AbstractGameState4_1.AbstractGameState4);
    exports.TapStateTutorial4 = TapStateTutorial4;
    cc._RF.pop();
  }, {
    "../../UIFramework/UIManager": "UIManager",
    "../ConstDefine": "ConstDefine",
    "../Controller/AbstractGameState4": "AbstractGameState4",
    "../Controller/TapBattle4": "TapBattle4",
    "../Controller/TapGameData4Ctrl": "TapGameData4Ctrl",
    "../ctrl/ConstantsFk4": "ConstantsFk4",
    "../ctrl/TapSavingData4": "TapSavingData4"
  } ],
  TapTheme4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3bd2bKFBcRIWZ+c20aFUUoT", "TapTheme4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TapTheme4 = function(_super) {
      __extends(TapTheme4, _super);
      function TapTheme4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._currentThemeId = -1;
        return _this;
      }
      TapTheme4_1 = TapTheme4;
      TapTheme4.prototype.onload = function() {
        TapTheme4_1.Instance = this;
      };
      TapTheme4.prototype.start = function() {};
      TapTheme4.prototype.update = function() {};
      TapTheme4.prototype.LoadTheme = function(themeId) {
        if (this._currentThemeId != themeId) {
          var pathBgr = "/Images/Background/bgr_" + themeId;
          var pathPlaform = "/Images/Platforms/Map" + themeId;
        }
      };
      var TapTheme4_1;
      TapTheme4 = TapTheme4_1 = __decorate([ ccclass ], TapTheme4);
      return TapTheme4;
    }(cc.Component);
    exports.default = TapTheme4;
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e7f2cd1e9M4aLIEDZWd8EJ", "UIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Dictionary_1 = require("../scripts/Utils/Dictionary");
    var Stack_1 = require("../scripts/Utils/Stack");
    var BaseUIForm_1 = require("./BaseUIForm");
    var ResourceManager_1 = require("./ResourceManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UIManager_1 = UIManager;
      UIManager.GetInstance = function() {
        if (null == this._instance) {
          var node = new cc.Node();
          this._instance = node.addComponent(UIManager_1);
        }
        return this._instance;
      };
      UIManager.prototype._Register = function() {
        this.Normal = cc.find("UICamera/Normal", this.node);
        this.Fixed = cc.find("UICamera/Fixed", this.node);
        this.PopUp = cc.find("UICamera/PopUp", this.node);
        this.UIMaskPanel = cc.find("UICamera/PopUp/UIMaskPanel", this.node);
        this.ScriptsNode = cc.find("UICamera/ScriptsNode", this.node);
        ResourceManager_1.default.GetInstance().node.on("RES_LOAD_COMPLETE", this.onUILoadComplete, UIManager_1.GetInstance());
      };
      UIManager.prototype.onUILoadComplete = function(uri, prefab) {
        var goCloneUIPrefabs = cc.instantiate(prefab);
        var baseUIForm;
        if (null != prefab && null != goCloneUIPrefabs) {
          baseUIForm = goCloneUIPrefabs.getComponent(BaseUIForm_1.default);
          if (null == baseUIForm) return null;
          if ("Loading" == uri) {
            console.error(" UIFormType.Fixed", uri, baseUIForm);
            goCloneUIPrefabs.parent = this.Fixed;
            goCloneUIPrefabs.active = false;
            this._dicAllUIForms.Add(uri, baseUIForm);
            this.onHandleUIForm(uri, baseUIForm);
            return;
          }
          switch (baseUIForm.CurrentUIType.UIForm_Type) {
           case BaseUIForm_1.UIFormType.Normal:
            goCloneUIPrefabs.parent = this.Normal;
            break;

           case BaseUIForm_1.UIFormType.Fixed:
            goCloneUIPrefabs.parent = this.Fixed;
            break;

           case BaseUIForm_1.UIFormType.Popup:
            goCloneUIPrefabs.parent = this.PopUp;
          }
          goCloneUIPrefabs.active = false;
          console.error(" UIFormType.Fixed", uri);
          this._dicAllUIForms.Add(uri, baseUIForm);
          this.onHandleUIForm(uri, baseUIForm);
        }
        return baseUIForm;
      };
      UIManager.prototype.onHandleUIForm = function(uri, baseUIForm) {
        baseUIForm.CurrentUIType.IsClearReverseChange && this.ClearStackArray();
        switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
         case BaseUIForm_1.UIFormShowMode.Normal:
          this.EnterUIformCache(uri);
          break;

         case BaseUIForm_1.UIFormShowMode.ReverseChange:
          this.PushUIForms(uri);
          break;

         case BaseUIForm_1.UIFormShowMode.HideOther:
          this.EnterUIFormsToCacheHideOther(uri);
        }
      };
      UIManager.prototype.EnterUIformCache = function(uriFormName) {
        var baseUIForm;
        var baseUIFormFromAllCache;
        baseUIForm = this._dicCurrentUIForms.GetValues(uriFormName);
        if (null != baseUIForm) return;
        baseUIFormFromAllCache = this._dicAllUIForms.GetValues(uriFormName);
        console.log(this._dicAllUIForms);
        if (null != baseUIFormFromAllCache) {
          this._dicCurrentUIForms.Add(uriFormName, baseUIFormFromAllCache);
          baseUIFormFromAllCache.Display();
        }
      };
      UIManager.prototype.PushUIForms = function(strUIFormName) {
        var baseUIForm;
        if (this._stackCurrentUIForms.Count > 0) {
          var topUIForms = this._stackCurrentUIForms.peek();
          topUIForms.Freeze();
        }
        baseUIForm = this._dicAllUIForms.GetValues(strUIFormName);
        null != baseUIForm ? baseUIForm.Display() : console.log("PushUIForms\u51fa\u9519\uff0c strUIFormName = " + strUIFormName);
        this._stackCurrentUIForms.push(baseUIForm);
      };
      UIManager.prototype.ClearStackArray = function() {
        if (null != this._stackCurrentUIForms && this._stackCurrentUIForms.Count >= 1) {
          this._stackCurrentUIForms.Clear();
          return true;
        }
        return false;
      };
      UIManager.prototype.ShowUIForms = function(uiFormName) {
        var _this = this;
        var baseUIForm = null;
        if (null == uiFormName || "'" == uiFormName) return;
        if (this.checkResult(uiFormName)) {
          baseUIForm = this.LoadFormsFromAllUIFormsCache(uiFormName, null);
          console.error("ShowUIForms2:" + uiFormName, baseUIForm);
          if (null == baseUIForm) return;
          baseUIForm.CurrentUIType.IsClearReverseChange && this.ClearStackArray();
          switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
           case BaseUIForm_1.UIFormShowMode.Normal:
            this.EnterUIformCache(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.ReverseChange:
            this.PushUIForms(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.HideOther:
            this.EnterUIFormsToCacheHideOther(uiFormName);
          }
        } else this.LoadFormsFromAllUIFormsCache(uiFormName, function(ur, res) {
          baseUIForm = _this.onUILoadComplete(ur, res);
          console.error("ShowUIForms:" + uiFormName, baseUIForm);
          if (null == baseUIForm) return;
          baseUIForm.CurrentUIType.IsClearReverseChange && _this.ClearStackArray();
          switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
           case BaseUIForm_1.UIFormShowMode.Normal:
            _this.EnterUIformCache(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.ReverseChange:
            _this.PushUIForms(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.HideOther:
            _this.EnterUIFormsToCacheHideOther(uiFormName);
          }
        });
      };
      UIManager.prototype.ShowUIForm = function(uiFormName, callback) {
        var _this = this;
        var baseUIForm = null;
        if (null == uiFormName || "'" == uiFormName) return;
        if (this.checkResult(uiFormName)) {
          baseUIForm = this.LoadFormsFromAllUIFormsCache(uiFormName, null);
          console.error("ShowUIForms2:" + uiFormName, baseUIForm);
          if (null == baseUIForm) return;
          baseUIForm.CurrentUIType.IsClearReverseChange && this.ClearStackArray();
          switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
           case BaseUIForm_1.UIFormShowMode.Normal:
            this.EnterUIformCache(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.ReverseChange:
            this.PushUIForms(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.HideOther:
            this.EnterUIFormsToCacheHideOther(uiFormName);
          }
          null != callback && void 0 != callback && callback(baseUIForm);
        } else this.LoadFormsFromAllUIFormsCache(uiFormName, function(ur, res) {
          baseUIForm = _this.onUILoadComplete(ur, res);
          console.error("ShowUIForms:" + uiFormName, baseUIForm);
          if (null == baseUIForm) return;
          baseUIForm.CurrentUIType.IsClearReverseChange && _this.ClearStackArray();
          switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
           case BaseUIForm_1.UIFormShowMode.Normal:
            _this.EnterUIformCache(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.ReverseChange:
            _this.PushUIForms(uiFormName);
            break;

           case BaseUIForm_1.UIFormShowMode.HideOther:
            _this.EnterUIFormsToCacheHideOther(uiFormName);
          }
          if (null != callback && void 0 != callback) {
            console.error("ShowUIForms: callback" + uiFormName, baseUIForm);
            callback(baseUIForm);
          }
        });
      };
      UIManager.prototype.EnterUIFormsToCacheHideOther = function(strUIFormName) {
        var baseUIForm;
        var baseUIFormFromAllCache;
        baseUIForm = this._dicCurrentUIForms.GetValues(strUIFormName);
        if (null != baseUIForm) return;
        this._dicCurrentUIForms.Values.forEach(function(baseUIFormItem) {
          baseUIFormItem.Hiding();
        });
        this._stackCurrentUIForms.storage.forEach(function(baseUIFormItem) {
          baseUIFormItem.Hiding();
        });
        baseUIFormFromAllCache = this._dicAllUIForms.GetValues(strUIFormName);
        if (null != baseUIFormFromAllCache) {
          this._dicCurrentUIForms.Add(strUIFormName, baseUIFormFromAllCache);
          baseUIFormFromAllCache.Display();
        }
      };
      UIManager.prototype.onLoad = function() {
        UIManager_1._instance = this;
        this._dicAllUIForms = new Dictionary_1.Dictionary();
        console.log(1, this._dicAllUIForms);
        this._stackCurrentUIForms = new Stack_1.Stack();
        this._dicCurrentUIForms = new Dictionary_1.Dictionary();
        this._Register();
      };
      UIManager.prototype.LoadFormsFromAllUIFormsCache = function(uiFormName, callback) {
        void 0 === callback && (callback = null);
        var result = null;
        result = this._dicAllUIForms.GetValues(uiFormName);
        console.error(result);
        null == result && this.LoadUIForm(uiFormName, function(ur, res) {
          null != callback && void 0 != callback && callback(ur, res);
        });
        return result;
      };
      UIManager.prototype.checkResult = function(uiFormName) {
        return null != this._dicAllUIForms.GetValues(uiFormName);
      };
      UIManager.prototype.LoadUIForm = function(uriFormName, callback) {
        void 0 === callback && (callback = null);
        console.log("LoadUIForm:" + uriFormName);
        var strUIFormPath = uriFormName;
        var goCloneUIPrefabs = null;
        var baseUIForm = null;
        null != strUIFormPath && "" != strUIFormPath ? ResourceManager_1.default.GetInstance().LoadAsset(strUIFormPath, function(url, result) {
          if (null != callback && void 0 != callback) {
            console.error("JSON\u4e2d\u672a\u5b9a\u4e49\u7684\u7a97\u53e3", url, result);
            callback(url, result);
          }
        }) : console.log("JSON\u4e2d\u672a\u5b9a\u4e49\u7684\u7a97\u53e3");
      };
      UIManager.prototype.CloseOrReturnUIForms = function(strUIFormName) {
        var baseUIForm = null;
        if (null == strUIFormName || "" == strUIFormName) return;
        baseUIForm = this._dicAllUIForms.GetValues(strUIFormName);
        console.error("CloseOrReturnUIForms", baseUIForm);
        if (null == baseUIForm) return;
        switch (baseUIForm.CurrentUIType.UIForm_ShowMode) {
         case BaseUIForm_1.UIFormShowMode.Normal:
          this.ExitUIFormCache(strUIFormName);
          break;

         case BaseUIForm_1.UIFormShowMode.ReverseChange:
          this.PopUIForms();
          break;

         case BaseUIForm_1.UIFormShowMode.HideOther:
          this.ExitUIFormFromCacheAndShowOther(strUIFormName);
        }
      };
      UIManager.prototype.ExitUIFormCache = function(strUIFormName) {
        var baseUIForm;
        baseUIForm = this._dicCurrentUIForms.GetValues(strUIFormName);
        console.error("ExitUIFormCache", baseUIForm, strUIFormName);
        if (null == baseUIForm) return;
        baseUIForm.Hiding();
        this._dicCurrentUIForms.Remove(strUIFormName);
      };
      UIManager.prototype.PopUIForms = function() {
        if (this._stackCurrentUIForms.Count >= 2) {
          var topUIForm = this._stackCurrentUIForms.pop();
          topUIForm.Hiding();
          var nextUIForm = this._stackCurrentUIForms.peek();
          nextUIForm.ReDisplay();
        } else if (1 == this._stackCurrentUIForms.Count) {
          var topUIForm = this._stackCurrentUIForms.pop();
          topUIForm.Hiding();
        }
      };
      UIManager.prototype.ExitUIFormFromCacheAndShowOther = function(strFormName) {
        var baseUIForm;
        baseUIForm = this._dicCurrentUIForms.GetValues(strFormName);
        if (null == baseUIForm) return;
        baseUIForm.Hiding();
        this._dicCurrentUIForms.Remove(strFormName);
        this._dicCurrentUIForms.Values.forEach(function(baseUIFormItem) {
          baseUIFormItem.ReDisplay();
        });
        this._stackCurrentUIForms.storage.forEach(function(baseUIFormItem) {
          baseUIFormItem.ReDisplay();
        });
      };
      var UIManager_1;
      UIManager = UIManager_1 = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "../scripts/Utils/Dictionary": "Dictionary",
    "../scripts/Utils/Stack": "Stack",
    "./BaseUIForm": "BaseUIForm",
    "./ResourceManager": "ResourceManager"
  } ],
  UISuperItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05ad9vH0ANAc6m/Oc1rzygv", "UISuperItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UISpuerItem = function(_super) {
      __extends(UISpuerItem, _super);
      function UISpuerItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function() {
          return this.layout.vertical ? (this.layout.accommodWidth - this.layout.spacingWidth) / this.layout.column : this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function() {
          return this.layout.horizontal ? (this.layout.accommodHeight - this.layout.spacingWidth) / this.layout.column : this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
        },
        enumerable: false,
        configurable: true
      });
      UISpuerItem.prototype.onLoad = function() {
        this.node["watchSelf"] = this.watchSelf.bind(this);
        this.node["saveOriginSize"] = this.saveOriginSize.bind(this);
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
          cc.warn("UISuperItem: item\u4e0d\u5141\u8bb8\u6302cc.Widget\u7ec4\u4ef6 \u8bf7\u624b\u52a8\u79fb\u9664");
          this.node.removeComponent(widget);
        }
      };
      UISpuerItem.prototype.saveOriginSize = function() {
        this.originSize = cc.size(this.width, this.height);
        this.node.setContentSize(this.originSize);
        this.originScale = cc.v2(this.node.scaleX, this.node.scaleY);
      };
      UISpuerItem.prototype.init = function(layout) {
        this.layout = layout;
        this.layout.node.on(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.saveOriginSize();
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.onChangeBrother();
      };
      UISpuerItem.prototype.onDestroy = function() {
        this.layout.node.off(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.unlisten();
      };
      UISpuerItem.prototype.onChangeBrother = function() {
        var _a;
        var _brother = this.layout.getBrotherNode(this.node);
        if ((null === _brother || void 0 === _brother ? void 0 : _brother.uuid) == (null === (_a = this.brother) || void 0 === _a ? void 0 : _a.uuid)) return;
        this.unlisten();
        this.brother = _brother;
        this.listen();
        this.watchBrother();
      };
      UISpuerItem.prototype.listen = function() {
        var _a, _b;
        null === (_a = this.brother) || void 0 === _a ? void 0 : _a.on("leave", this.unlisten, this);
        null === (_b = this.brother) || void 0 === _b ? void 0 : _b.on(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
      };
      UISpuerItem.prototype.unlisten = function() {
        var _a, _b;
        null === (_a = this.brother) || void 0 === _a ? void 0 : _a.off("leave", this.unlisten, this);
        null === (_b = this.brother) || void 0 === _b ? void 0 : _b.off(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
        this.brother = null;
      };
      UISpuerItem.prototype.watchSize = function() {
        if (this.layout.column > 1) {
          this.node.setContentSize(this.originSize);
          this.node.setScale(this.originScale);
        } else {
          if (!this.layout.vertical || this.node.getContentSize().width == this.originSize.width && this.node.scaleX == this.originScale.x) {
            if (this.layout.horizontal && (this.node.getContentSize().height != this.originSize.height || this.node.scaleY != this.originScale.y)) {
              cc.warn("\u6c34\u5e73\u6392\u5217\u4e0d\u5141\u8bb8\u4fee\u6539\u3010\u9ad8\u5ea6\u3011");
              this.node.height = this.originSize.height;
              this.node.scaleY = this.originScale.y;
            }
          } else {
            cc.warn("\u5782\u76f4\u6392\u5217\u4e0d\u5141\u8bb8\u4fee\u6539\u3010\u5bbd\u5ea6\u3011");
            this.node.width = this.originSize.width;
            this.node.scaleX = this.originScale.x;
          }
          this.brother && this.watchBrother();
          this.layout.resetScrollView();
          this.node.emit(cc.Node.EventType.POSITION_CHANGED);
        }
        0 == this.node["index"] && this.layout.isNormalSize && this.node.setPosition(this.layout.getGroupHeader(this.node));
      };
      UISpuerItem.prototype.watchBrother = function() {
        if (!this.brother) return;
        this.layout.headerToFooter ? this.headerToFooterRelativeToFooter(this.brother) : this.footerToHeaderRelativeToFooter(this.brother);
      };
      UISpuerItem.prototype.isOutOfBoundary = function(offset) {
        if (this.layout.vertical && 0 == offset.y) return true;
        if (this.layout.horizontal && 0 == offset.x) return true;
        return false;
      };
      UISpuerItem.prototype.footerToHeaderWatchHeader = function() {
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column) return;
        var index = this.layout.footer["index"] + 1;
        if (index >= this.layout.maxItemTotal) {
          if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = 0;
        }
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
      };
      UISpuerItem.prototype.footerToHeaderWatchFooter = function() {
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column) return;
        var index = this.layout.header["index"] - 1;
        if (index < 0) {
          if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = this.node["index"];
        }
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.unlisten();
        this.footerToHeaderRelativeToHeader(this.layout.header);
        this.layout.setSiblingIndex(this.node, 0);
      };
      UISpuerItem.prototype.headerToFooterWatchHeader = function() {
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column) return;
        var index = this.layout.footer["index"] + 1;
        if (index > this.layout.maxItemTotal - 1) {
          if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = 0;
        }
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
      };
      UISpuerItem.prototype.headerToFooterWatchFooter = function() {
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column) return;
        var index = this.layout.header["index"] - 1;
        if (index < 0) {
          if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = this.node["index"];
        }
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.unlisten();
        this.headerToFooterRelativeToHeader(this.layout.header);
        this.layout.setSiblingIndex(this.node, 0);
      };
      UISpuerItem.prototype.watchSelf = function(isScrollToFooter) {
        isScrollToFooter ? this.layout.headerToFooter ? this.headerToFooterWatchFooter() : this.footerToHeaderWatchHeader() : this.layout.headerToFooter ? this.headerToFooterWatchHeader() : this.footerToHeaderWatchFooter();
      };
      UISpuerItem.prototype.footerToHeaderRelativeToHeader = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupFooter(this.node).x;
            pos.y = this.layout.getGroupBottomY(this.node, relative);
          } else {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = relative.y;
          }
          0 == this.node["index"] && (pos.x = this.layout.getGroupHeader(this.node).x);
        } else {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupRightX(this.node, relative);
            pos.y = this.layout.getGroupFooter(this.node).y;
          } else {
            pos.x = relative.x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          }
          0 == this.node["index"] && (pos.y = this.layout.getGroupHeader(this.node).y);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.footerToHeaderRelativeToFooter = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupHeader(this.node).x;
          pos.y = this.layout.getGroupTopY(this.node, relative);
        } else {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = relative.y;
        } else if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupLeftX(this.node, relative);
          pos.y = this.layout.getGroupHeader(this.node).y;
        } else {
          pos.x = relative.x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.headerToFooterRelativeToHeader = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupFooter(this.node).x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          } else {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = relative.y;
          }
          0 == this.node["index"] && (pos.x = this.layout.getGroupHeader(this.node).x);
        } else {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = this.layout.getGroupFooter(this.node).y;
          } else {
            pos.x = relative.x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          }
          0 == this.node["index"] && (pos.y = this.layout.getGroupHeader(this.node).y);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.headerToFooterRelativeToFooter = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupHeader(this.node).x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        } else {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = relative.y;
        } else if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = this.layout.getGroupHeader(this.node).y;
        } else {
          pos.x = relative.x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem = __decorate([ ccclass ], UISpuerItem);
      return UISpuerItem;
    }(cc.Component);
    exports.default = UISpuerItem;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  UISuperLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "699eb1xVINCcZBBHwAgwDBT", "UISuperLayout");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UISuperDirection = exports.UISuperAxis = exports.UIChangeBrotherEvnet = void 0;
    var UISuperScrollView_1 = require("./UISuperScrollView");
    var UISuperItem_1 = require("./UISuperItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var EPSILON = 1e-4;
    exports.UIChangeBrotherEvnet = "UIChangeBrotherEvnet";
    var UISuperAxis;
    (function(UISuperAxis) {
      UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
      UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
    })(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
    var UISuperDirection;
    (function(UISuperDirection) {
      UISuperDirection[UISuperDirection["HEADER_TO_FOOTER"] = 0] = "HEADER_TO_FOOTER";
      UISuperDirection[UISuperDirection["FOOTER_TO_HEADER"] = 1] = "FOOTER_TO_HEADER";
    })(UISuperDirection = exports.UISuperDirection || (exports.UISuperDirection = {}));
    var UISuperLayout = function(_super) {
      __extends(UISuperLayout, _super);
      function UISuperLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startAxis = UISuperAxis.VERTICAL;
        _this.direction = UISuperDirection.HEADER_TO_FOOTER;
        _this.paddingTop = 0;
        _this.paddingBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.spacing = cc.Vec2.ZERO;
        _this.column = 2;
        _this.multiple = 2;
        _this.prefab = null;
        _this.headerLoop = false;
        _this.footerLoop = false;
        _this.affectedByScale = true;
        _this.refreshItemEvents = [];
        _this._isinited = false;
        _this._maxPrefabTotal = 0;
        _this._children = [];
        _this._scrollView = null;
        _this._maxItemTotal = 0;
        _this._prevLayoutPosition = cc.Vec2.ZERO;
        _this.scrollToHeaderOrFooter = false;
        return _this;
      }
      Object.defineProperty(UISuperLayout.prototype, "layoutDirection", {
        get: function() {
          var pos = cc.Vec2.ZERO;
          this.vertical ? pos.y = this.node.y - this._prevLayoutPosition.y : pos.x = this.node.x - this._prevLayoutPosition.x;
          this._prevLayoutPosition = this.node.getPosition();
          return pos;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "isScrollToFooter", {
        get: function() {
          return this.vertical ? this.layoutDirection.y < 0 : this.layoutDirection.x > 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "children", {
        get: function() {
          return this._children;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "maxItemTotal", {
        get: function() {
          return this._maxItemTotal;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "maxPrefabTotal", {
        get: function() {
          return this._maxPrefabTotal;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        get: function() {
          return this.scrollView.view.getContentSize();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "vertical", {
        get: function() {
          return this.startAxis == UISuperAxis.VERTICAL;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "horizontal", {
        get: function() {
          return this.startAxis == UISuperAxis.HORIZONTAL;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerToFooter", {
        get: function() {
          return this.direction == UISuperDirection.HEADER_TO_FOOTER;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerToHeader", {
        get: function() {
          return this.direction == UISuperDirection.FOOTER_TO_HEADER;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "spacingWidth", {
        get: function() {
          return this.spacing.x * (this.column - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "spacingHeight", {
        get: function() {
          return this.spacing.y * (this.column - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "accommodWidth", {
        get: function() {
          return this.viewSize.width - this.paddingLeft - this.paddingRight;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "accommodHeight", {
        get: function() {
          return this.viewSize.height - this.paddingTop - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function() {
          this._scrollView || (this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default));
          return this._scrollView;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "header", {
        get: function() {
          return this._children[0];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footer", {
        get: function() {
          return this._children[this._children.length - 1];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "topBoundary", {
        get: function() {
          return this.headerToFooter ? this.headerBoundaryY + this.paddingTop : this.footerBoundaryY + this.paddingTop;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "bottomBoundary", {
        get: function() {
          return this.headerToFooter ? this.footerBoundaryY - this.paddingBottom : this.headerBoundaryY - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "leftBoundary", {
        get: function() {
          return this.headerToFooter ? this.headerBoundaryX - this.paddingLeft : this.footerBoundaryX - this.paddingLeft;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "rightBoundary", {
        get: function() {
          return this.headerToFooter ? this.footerBoundaryX + this.paddingRight : this.headerBoundaryX + this.paddingRight;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        get: function() {
          return this.headerToFooter ? this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header) : this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        get: function() {
          return this.headerToFooter ? this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header) : this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        get: function() {
          return this.headerToFooter ? this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer) : this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        get: function() {
          return this.headerToFooter ? this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer) : this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "isNormalSize", {
        get: function() {
          return this.node.getContentSize().equals(this.viewSize);
        },
        enumerable: false,
        configurable: true
      });
      UISuperLayout.prototype.getContentSize = function() {
        var size = this.getReallySize();
        var viewSize = this.scrollView.view.getContentSize();
        size.height < viewSize.height && (size.height = viewSize.height);
        size.width < viewSize.width && (size.width = viewSize.width);
        return size;
      };
      UISuperLayout.prototype.getReallySize = function() {
        if (0 == this.node.childrenCount) return this.viewSize;
        var size = cc.Size.ZERO;
        if (this.headerToFooter) {
          size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
          size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        } else {
          size.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight;
          size.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        return size;
      };
      UISuperLayout.prototype.resetScrollView = function() {
        this.scrollView.reset();
      };
      UISuperLayout.prototype.getUsedScaleValue = function(value) {
        return this.affectedByScale ? Math.abs(value) : 1;
      };
      UISuperLayout.prototype.total = function(value) {
        return __awaiter(this, void 0, void 0, function() {
          var dataOffset, reallyOffset;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.scrollView.stopAutoScroll();
              this.scrollView.release();
              this.initlized();
              return [ 4, this.asyncCreateItem(value) ];

             case 1:
              _a.sent();
              dataOffset = this.getDataOffset(value);
              reallyOffset = this.getReallyOffset(dataOffset);
              this.refreshItems(value, reallyOffset);
              this._maxItemTotal = value;
              return [ 2 ];
            }
          });
        });
      };
      UISuperLayout.prototype.getBrotherNode = function(node) {
        var index = this.getSiblingIndex(node) - 1;
        return this._children[index];
      };
      UISuperLayout.prototype.isGroupHeader = function(node) {
        var xOry = this.getGroupHeader(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
      };
      UISuperLayout.prototype.isGroupFooter = function(node) {
        var xOry = this.getGroupFooter(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
      };
      UISuperLayout.prototype.getGroupHeader = function(node) {
        var pos = cc.Vec2.ZERO;
        if (!node) return pos;
        if (this.vertical) if (this.headerToFooter) {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft * node.scaleX - this.node.anchorX * this.viewSize.width * node.scaleX;
          pos.y = (1 - node.anchorY) * -this.getScaleHeight(node) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        } else {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
          pos.y = node.anchorY * this.getScaleHeight(node) + this.paddingBottom - this.node.anchorY * this.viewSize.height;
        } else if (this.headerToFooter) {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
          pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        } else {
          pos.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(node) * (1 - node.anchorX);
          pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        }
        return pos;
      };
      UISuperLayout.prototype.getGroupFooter = function(node) {
        var pos = cc.Vec2.ZERO;
        if (!node) return pos;
        if (this.vertical) {
          pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight);
          pos.y = node.y;
        } else {
          pos.x = node.x;
          pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom;
        }
        return pos;
      };
      UISuperLayout.prototype.getGroupRightX = function(node, relative) {
        if (!node || !relative) return this.getGroupHeader(node).x;
        var prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX);
        var selfWidth = this.getScaleWidth(node) * node.anchorX;
        return prevWidth + selfWidth + this.spacing.x;
      };
      UISuperLayout.prototype.getGroupLeftX = function(node, relative) {
        if (!node || !relative) return this.getGroupFooter(node).x;
        var prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX;
        var selfWidth = this.getScaleWidth(node) * (1 - node.anchorX);
        return prevWidth - selfWidth - this.spacing.x;
      };
      UISuperLayout.prototype.getGroupBottomY = function(node, relative) {
        var prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY;
        var selfHeight = this.getScaleHeight(node) * (1 - node.anchorY);
        return prevHeight - selfHeight - this.spacing.y;
      };
      UISuperLayout.prototype.getGroupTopY = function(node, relative) {
        var prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY);
        var selfHeight = this.getScaleHeight(node) * node.anchorY;
        return prevHeight + selfHeight + this.spacing.y;
      };
      UISuperLayout.prototype.isOutOfBoundaryHeader = function(node, multiple) {
        void 0 === multiple && (multiple = 1.5);
        var width = node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.isOutOfBoundaryFooter = function(node, multiple) {
        void 0 === multiple && (multiple = 1.5);
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.scrollToHeader = function(timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToHeader();
        this.headerToFooter ? this.vertical ? this.scrollView.scrollToTop(timeInSecond, attenuated) : this.scrollView.scrollToLeft(timeInSecond, attenuated) : this.vertical ? this.scrollView.scrollToBottom(timeInSecond, attenuated) : this.scrollView.scrollToRight(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToFooter = function(timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToFooter();
        this.headerToFooter ? this.vertical ? this.scrollView.scrollToBottom(timeInSecond, attenuated) : this.scrollView.scrollToRight(timeInSecond, attenuated) : this.vertical ? this.scrollView.scrollToTop(timeInSecond, attenuated) : this.scrollView.scrollToLeft(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.notifyRefreshItem = function(target) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, target["index"]);
      };
      UISuperLayout.prototype.getSiblingIndex = function(node) {
        return this._children.indexOf(node);
      };
      UISuperLayout.prototype.setSiblingIndex = function(node, index) {
        index = -1 !== index ? index : this._children.length - 1;
        var oldIndex = this._children.indexOf(node);
        if (index !== oldIndex) {
          this._children.splice(oldIndex, 1);
          index < this._children.length ? this._children.splice(index, 0, node) : this._children.push(node);
          this.node.emit(exports.UIChangeBrotherEvnet);
        }
      };
      UISuperLayout.prototype.onLoad = function() {
        this.initlized();
      };
      UISuperLayout.prototype.initlized = function() {
        if (this._isinited) return;
        this.node.anchorX = .5;
        this.node.anchorY = .5;
        this.node.setContentSize(this.viewSize);
        this.node.getContentSize = this.getContentSize.bind(this);
        this.node.setPosition(cc.Vec2.ZERO);
        this.column = this.column < 1 ? 1 : this.column;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this);
        this.scrollView.view.on(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this);
        this._isinited = true;
      };
      UISuperLayout.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this);
        this.scrollView.view.off(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this);
      };
      UISuperLayout.prototype.onChangePosition = function() {
        var flag = this.isScrollToFooter;
        this.headerToFooter ? flag ? this.footerToHeaderWatchChilds(flag) : this.headerToFooterWatchChilds(flag) : flag ? this.headerToFooterWatchChilds(flag) : this.footerToHeaderWatchChilds(flag);
        (this.vertical && 0 == this.node.y || this.horizontal && 0 == this.node.x) && this.header.setPosition(this.getGroupHeader(this.header));
      };
      UISuperLayout.prototype.resetItemSize = function() {
        for (var i = 0; i < this.children.length; i++) this.children[i]["saveOriginSize"]();
        var pos = this.getGroupHeader(this.header);
        this.vertical ? this.header.x = pos.x : this.header.y = pos.y;
        for (var i = 0; i < this.children.length; i++) this.children[i].emit(cc.Node.EventType.POSITION_CHANGED);
      };
      UISuperLayout.prototype.getScaleWidth = function(node) {
        return node.width * this.getUsedScaleValue(node.scaleX);
      };
      UISuperLayout.prototype.getScaleHeight = function(node) {
        return node.height * this.getUsedScaleValue(node.scaleY);
      };
      UISuperLayout.prototype.getTempChildren = function() {
        var list = [];
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          list.push(child);
        }
        return list;
      };
      UISuperLayout.prototype.headerToFooterWatchChilds = function(flag) {
        var children = this.getTempChildren();
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child["watchSelf"](flag);
        }
      };
      UISuperLayout.prototype.footerToHeaderWatchChilds = function(flag) {
        var children = this.getTempChildren();
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          child["watchSelf"](flag);
        }
      };
      UISuperLayout.prototype.getDataOffset = function(value) {
        if (this.footer && this.footer["index"] + 1 >= value) {
          var offset = this.footer["index"] + 1 - value;
          return 0 == offset ? 0 : -offset;
        }
        if (0 == this._maxItemTotal || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal) return 0;
        if (this.isGroupFooter(this.footer)) return 0;
        return value - this._maxItemTotal;
      };
      UISuperLayout.prototype.getReallyOffset = function(dataOffset) {
        if (!this.header) return 0;
        if (dataOffset > 0) {
          for (var i = 0; i < dataOffset; i++) {
            if (this.isGroupFooter(this.footer)) return i;
            var pos = this.header.getPosition();
            if (this.vertical) if (this.isGroupFooter(this.header)) {
              this.headerToFooter ? pos.y = this.getGroupBottomY(this.header, this.header) : pos.y = this.getGroupTopY(this.header, this.header);
              pos.x = this.getGroupHeader(this.header).x;
            } else pos.x = this.getGroupRightX(this.header, this.header); else if (this.isGroupFooter(this.header)) {
              this.headerToFooter ? pos.x = this.getGroupRightX(this.header, this.header) : pos.x = this.getGroupLeftX(this.header, this.header);
              pos.y = this.getGroupHeader(this.header).y;
            } else pos.y = this.getGroupBottomY(this.header, this.header);
            this.header.setPosition(pos);
          }
          return dataOffset;
        }
        for (var i = 0; i < Math.abs(dataOffset); i++) {
          var pos = cc.Vec2.ZERO;
          if (this.vertical) if (this.isGroupHeader(this.header)) {
            pos.x = this.getGroupFooter(this.header).x;
            this.headerToFooter ? pos.y = this.getGroupTopY(this.header, this.header) : pos.y = this.getGroupBottomY(this.header, this.header);
          } else {
            pos.x = this.getGroupLeftX(this.header, this.header);
            pos.y = this.header.y;
          } else if (this.isGroupHeader(this.header)) {
            pos.y = this.getGroupFooter(this.header).y;
            this.headerToFooter ? pos.x = this.getGroupLeftX(this.header, this.header) : pos.x = this.getGroupRightX(this.header, this.header);
          } else {
            pos.y = this.getGroupTopY(this.header, this.header);
            pos.x = this.header.x;
          }
          this.header.setPosition(pos);
        }
        this.scrollView.calculateBoundary();
        return dataOffset;
      };
      UISuperLayout.prototype.refreshItems = function(value, offset) {
        void 0 === offset && (offset = 0);
        if (!this.header) return;
        var startIndex = this.header["index"] - 1 + offset;
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          startIndex++;
          startIndex > value - 1 ? startIndex = 0 : startIndex < 0 && (startIndex = value - 1);
          child["index"] = startIndex;
          this.notifyRefreshItem(child);
        }
      };
      UISuperLayout.prototype.resetToHeader = function() {
        var _a, _b;
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          child["index"] = i;
          this.notifyRefreshItem(child);
        }
        this.headerLoop || this.footerLoop ? this.scrollToHeaderOrFooter || (null === (_b = this.header) || void 0 === _b ? void 0 : _b.setPosition(this.getGroupHeader(this.header))) : null === (_a = this.header) || void 0 === _a ? void 0 : _a.setPosition(this.getGroupHeader(this.header));
      };
      UISuperLayout.prototype.resetToFooter = function() {
        var index = this._maxItemTotal;
        for (var i = this._children.length - 1; i >= 0; i--) {
          var child = this._children[i];
          child["index"] = --index;
          this.notifyRefreshItem(child);
        }
      };
      UISuperLayout.prototype.removeChilds = function(value) {
        var length = this.node.childrenCount - value;
        for (var i = 0; i < length; i++) {
          var child = this.footer;
          this.remChild(child);
          child.destroy();
          this.node.removeChild(child);
        }
        if (!this.header) return;
        var pos = this.getGroupHeader(this.header);
        this.vertical ? this.header.x = pos.x : this.header.y = pos.y;
      };
      UISuperLayout.prototype.asyncCreateItem = function(value) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var total;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              null === (_a = this._gener) || void 0 === _a ? void 0 : _a.return("");
              if (this.node.childrenCount > value) return [ 2, this.removeChilds(value) ];
              if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount) return [ 2 ];
              total = value - this.node.childrenCount;
              this._gener = this.getGeneratorLength(total, function() {
                var child = cc.instantiate(_this.prefab);
                child["index"] = _this.node.childrenCount;
                _this.addChild(child);
                var spuerItem = child.getComponent(UISuperItem_1.default) || child.addComponent(UISuperItem_1.default);
                _this.node.addChild(child);
                spuerItem.init(_this);
                _this.notifyRefreshItem(child);
                if (1 == _this.node.childrenCount) {
                  var pos = _this.getGroupHeader(_this.header);
                  _this.header.setPosition(pos);
                  _this.scrollView.calculateBoundary();
                }
                var selfHorW, viewHorW;
                if (_this.vertical) {
                  selfHorW = _this.getReallySize().height;
                  viewHorW = _this.viewSize.height;
                } else {
                  selfHorW = _this.getReallySize().width;
                  viewHorW = _this.viewSize.width;
                }
                if (selfHorW >= viewHorW * _this.multiple && _this.isGroupFooter(_this.footer)) {
                  _this._maxPrefabTotal = _this.node.childrenCount;
                  return false;
                }
                return true;
              });
              return [ 4, this.exeGenerator(this._gener, 10) ];

             case 1:
              _b.sent();
              return [ 2 ];
            }
          });
        });
      };
      UISuperLayout.prototype.addChild = function(node) {
        this._children.push(node);
        this.node.emit(exports.UIChangeBrotherEvnet);
      };
      UISuperLayout.prototype.remChild = function(node) {
        var index = this._children.indexOf(node);
        if (-1 == index) return;
        this._children.splice(index, 1);
        this.node.emit(exports.UIChangeBrotherEvnet);
      };
      UISuperLayout.prototype.getGeneratorLength = function(length, callback) {
        var _i, i, result;
        var params = [];
        for (_i = 2; _i < arguments.length; _i++) params[_i - 2] = arguments[_i];
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            i = 0;
            _a.label = 1;

           case 1:
            if (!(i < length)) return [ 3, 5 ];
            result = callback.apply(void 0, __spreadArrays([ i ], params));
            if (!result) return [ 3, 3 ];
            return [ 4 ];

           case 2:
            _a.sent();
            return [ 3, 4 ];

           case 3:
            return [ 2 ];

           case 4:
            i++;
            return [ 3, 1 ];

           case 5:
            return [ 2 ];
          }
        });
      };
      UISuperLayout.prototype.exeGenerator = function(generator, duration) {
        return new Promise(function(resolve, reject) {
          var gen = generator;
          var execute = function() {
            var startTime = new Date().getTime();
            for (var iter = gen.next(); ;iter = gen.next()) {
              if (null == iter || iter.done) {
                resolve(null);
                return;
              }
              if (new Date().getTime() - startTime > duration) {
                setTimeout(function() {
                  return execute();
                }, 1e3 * cc.director.getDeltaTime());
                return;
              }
            }
          };
          execute();
        });
      };
      __decorate([ property({
        type: cc.Enum(UISuperAxis),
        displayName: "\u6392\u5217\u65b9\u5411"
      }) ], UISuperLayout.prototype, "startAxis", void 0);
      __decorate([ property({
        type: cc.Enum(UISuperDirection),
        displayName: "\u6392\u5217\u5b50\u8282\u70b9\u7684\u65b9\u5411"
      }) ], UISuperLayout.prototype, "direction", void 0);
      __decorate([ property({
        displayName: "\u4e0a\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingTop", void 0);
      __decorate([ property({
        displayName: "\u4e0b\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingBottom", void 0);
      __decorate([ property({
        displayName: "\u5de6\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingLeft", void 0);
      __decorate([ property({
        displayName: "\u53f3\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingRight", void 0);
      __decorate([ property({
        displayName: "\u95f4\u9694"
      }) ], UISuperLayout.prototype, "spacing", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u7ec4item\u4e2a\u6570",
        tooltip: "\u5355\u884c\u7684\u5217\u6570 \u6216 \u5355\u5217\u7684\u884c\u6570"
      }) ], UISuperLayout.prototype, "column", void 0);
      __decorate([ property({
        displayName: "item\u521b\u5efa\u500d\u7387",
        tooltip: "\u76f8\u5bf9\u4e8eview\u7684\u5c3a\u5bf8 \u9ed8\u8ba42\u500d"
      }) ], UISuperLayout.prototype, "multiple", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "item Prefab"
      }) ], UISuperLayout.prototype, "prefab", void 0);
      __decorate([ property({
        displayName: "\u5934\u90e8\u6ed1\u52a8\u5faa\u73af"
      }) ], UISuperLayout.prototype, "headerLoop", void 0);
      __decorate([ property({
        displayName: "\u5c3e\u90e8\u6ed1\u52a8\u5faa\u73af"
      }) ], UISuperLayout.prototype, "footerLoop", void 0);
      __decorate([ property ], UISuperLayout.prototype, "affectedByScale", void 0);
      __decorate([ property(cc.Component.EventHandler) ], UISuperLayout.prototype, "refreshItemEvents", void 0);
      UISuperLayout = __decorate([ ccclass, menu("UISuperLayout") ], UISuperLayout);
      return UISuperLayout;
    }(cc.Component);
    exports.default = UISuperLayout;
    cc._RF.pop();
  }, {
    "./UISuperItem": "UISuperItem",
    "./UISuperScrollView": "UISuperScrollView"
  } ],
  UISuperScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf9af4O7wZKvocAG07bRvtr", "UISuperScrollView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var EPSILON = 1e-4;
    var UISpuerScrollView = function(_super) {
      __extends(UISpuerScrollView, _super);
      function UISpuerScrollView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerMultiple = 2;
        _this.footerOutOffset = 200;
        _this.footerMultiple = 2;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.headerProgress = 0;
        _this.footerProgress = 0;
        _this._layout = null;
        return _this;
      }
      Object.defineProperty(UISpuerScrollView.prototype, "view", {
        get: function() {
          return this["_view"];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "autoScrolling", {
        get: function() {
          return this["_autoScrolling"];
        },
        set: function(value) {
          this["_autoScrolling"] = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "layout", {
        get: function() {
          null == this._layout && (this._layout = this.content.getComponent(UISuperLayout_1.default));
          return this._layout;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function() {
          var _a, _b, _c, _d;
          if (this.layout.headerToFooter) {
            if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) return 0 == (null === (_b = this.layout) || void 0 === _b ? void 0 : _b.header["index"]);
          } else if (null === (_c = this.layout) || void 0 === _c ? void 0 : _c.footer) return (null === (_d = this.layout) || void 0 === _d ? void 0 : _d.footer["index"]) == this.layout.maxItemTotal - 1;
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function() {
          var _a, _b, _c;
          if (this.layout.headerToFooter) {
            if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) return this.layout.footer["index"] == this.layout.maxItemTotal - 1;
          } else if (null === (_b = this.layout) || void 0 === _b ? void 0 : _b.header) return 0 == (null === (_c = this.layout) || void 0 === _c ? void 0 : _c.header["index"]);
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isCalculPull", {
        get: function() {
          return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0;
        },
        enumerable: false,
        configurable: true
      });
      UISpuerScrollView.prototype.calculateBoundary = function() {
        this["_calculateBoundary"]();
      };
      UISpuerScrollView.prototype.getHowMuchOutOfBoundary = function(offset) {
        return this["_getHowMuchOutOfBoundary"](offset);
      };
      UISpuerScrollView.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
      };
      UISpuerScrollView.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
      };
      UISpuerScrollView.prototype.onChangeSize = function() {
        var widget = this.view.getComponent(cc.Widget);
        if (!widget) return;
        widget.updateAlignment();
      };
      UISpuerScrollView.prototype.release = function() {
        this.isMoveHeader = false;
        this.isMoveFooter = false;
        if (this.isLockHeader || this.isLockFooter) {
          var outOfBoundary = this.getHowMuchOutOfBoundary();
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          var autoScroll = true;
          if (0 == offset || this.isLockHeader && offset < 0 || this.isLockFooter && offset > 0) {
            this.clearProgress();
            autoScroll = false;
          }
          this.isLockHeader = false;
          this.isLockFooter = false;
          if (autoScroll) {
            this["_outOfBoundaryAmountDirty"] = true;
            this["_processInertiaScroll"]();
          }
        } else this.clearProgress();
      };
      UISpuerScrollView.prototype.reset = function() {
        this["_outOfBoundaryAmountDirty"] = true;
        var offset = this.getHowMuchOutOfBoundary();
        offset.fuzzyEquals(cc.v2(0, 0), EPSILON) || this["_processInertiaScroll"]();
      };
      UISpuerScrollView.prototype._onTouchMoved = function(event, captureListeners) {
        _super.prototype["_onTouchMoved"].call(this, event, captureListeners);
        if (this.isCalculPull) {
          var outOfBoundary = this.getHowMuchOutOfBoundary();
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          if (offset > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter) {
            this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
            this.isMoveHeader = this.headerProgress >= this.headerMultiple;
            this.emitPullDownEvent({
              action: false,
              progress: this.headerProgress,
              progressStage: this.isMoveHeader ? "wait" : "touch"
            });
            this.emitPullUpEvent({
              action: false,
              progress: 0,
              progressStage: "release"
            });
          } else if (offset < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader) {
            this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
            this.isMoveFooter = this.footerProgress >= this.footerMultiple;
            this.emitPullUpEvent({
              action: false,
              progress: this.footerProgress,
              progressStage: this.isMoveFooter ? "wait" : "touch"
            });
            this.emitPullDownEvent({
              action: false,
              progress: 0,
              progressStage: "release"
            });
          }
        }
      };
      UISpuerScrollView.prototype._dispatchEvent = function(event) {
        _super.prototype["_dispatchEvent"].call(this, event);
        "scroll-ended" == event && (this.layout.scrollToHeaderOrFooter = false);
      };
      UISpuerScrollView.prototype._getContentTopBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height ? this.layout.topBoundary : this._getContentBottomBoundary() + viewSize.height;
        this.isHeader && this.isLockHeader && (local += this.headerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentBottomBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height ? this.layout.bottomBoundary : this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        this.isFooter && this.isLockFooter && (local -= this.footerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentLeftBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width ? this.layout.leftBoundary : this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        this.isHeader && this.isLockHeader && (local -= this.headerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentRightBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width ? this.layout.rightBoundary : this._getContentLeftBoundary() + viewSize.width;
        this.isFooter && this.isLockFooter && (local += this.footerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._startAutoScroll = function(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) if (this.isMoveHeader && !this.isLockHeader) {
          this.isLockHeader = true;
          this.vertical && (deltaMove.y -= this.headerOutOffset);
          this.horizontal && (deltaMove.x += this.headerOutOffset);
          this.emitPullDownEvent({
            action: true,
            progress: this.headerProgress,
            progressStage: "lock"
          });
        } else if (this.isMoveFooter && !this.isLockFooter) {
          this.isLockFooter = true;
          this.vertical && (deltaMove.y += this.footerOutOffset);
          this.horizontal && (deltaMove.x -= this.footerOutOffset);
          this.emitPullUpEvent({
            action: true,
            progress: this.footerProgress,
            progressStage: "lock"
          });
        }
        _super.prototype["_startAutoScroll"].call(this, deltaMove, timeInSecond, attenuated);
      };
      UISpuerScrollView.prototype._updateScrollBar = function(outOfBoundary) {
        _super.prototype["_updateScrollBar"].call(this, outOfBoundary);
        if (!this.isCalculPull) return;
        if (this["_autoScrollBraking"]) return;
        if (!this.autoScrolling) return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) {
          var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
          var progressStage = void 0;
          if (this.isLockHeader) {
            this.headerProgress = 1 == this.headerProgress ? this.headerProgress : Math.max(progress, 1);
            progressStage = "lock";
          } else {
            this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
            progressStage = "release";
          }
          this.emitPullDownEvent({
            action: false,
            progress: this.headerProgress,
            progressStage: progressStage
          });
        } else if (offset < 0) {
          var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
          var progressStage = void 0;
          if (this.isLockFooter) {
            this.footerProgress = 1 == this.footerProgress ? this.footerProgress : Math.max(progress, 1);
            progressStage = "lock";
          } else {
            this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
            progressStage = "release";
          }
          this.emitPullUpEvent({
            action: false,
            progress: this.footerProgress,
            progressStage: progressStage
          });
        } else 0 == offset && (this.isLockHeader || this.isLockFooter || this.clearProgress());
      };
      UISpuerScrollView.prototype.clearProgress = function() {
        this.headerProgress = 0;
        this.footerProgress = 0;
        this.emitPullDownEvent({
          action: false,
          progress: 0,
          progressStage: "release"
        });
        this.emitPullUpEvent({
          action: false,
          progress: 0,
          progressStage: "release"
        });
      };
      UISpuerScrollView.prototype.emitPullDownEvent = function(data) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
      };
      UISpuerScrollView.prototype.emitPullUpEvent = function(data) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
      };
      __decorate([ property({
        displayName: "\u9876\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0b\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u6ee1\u8db3\u89e6\u53d1Header\u7684\u500d\u6570"
      }) ], UISpuerScrollView.prototype, "headerMultiple", void 0);
      __decorate([ property({
        displayName: "\u5e95\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0a\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u6ee1\u8db3\u89e6\u53d1Footer\u7684\u500d\u6570"
      }) ], UISpuerScrollView.prototype, "footerMultiple", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullDownEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullUpEvents", void 0);
      UISpuerScrollView = __decorate([ ccclass, menu("UISpuerScrollView") ], UISpuerScrollView);
      return UISpuerScrollView;
    }(cc.ScrollView);
    exports.default = UISpuerScrollView;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  UnitSpineRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b14baehYf9AGLyuVOJDNbSW", "UnitSpineRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UnitSpineRendererController = function() {
      function UnitSpineRendererController(tfParent, renderUnitInfo) {}
      UnitSpineRendererController.prototype.GetRenderUnitInfo = function() {
        throw new Error("Method not implemented.");
      };
      UnitSpineRendererController.prototype.SetSortingOrder = function(order) {};
      UnitSpineRendererController.prototype.SetSortingLayer = function(layerName) {};
      UnitSpineRendererController.prototype.Hide = function() {};
      UnitSpineRendererController.prototype.Show = function() {};
      UnitSpineRendererController.prototype.DestroyRendererUnit = function() {};
      UnitSpineRendererController.prototype.LoadRendererUnit = function(tfUnitContainer) {
        var spineUnitInfo = this.GetRenderUnitInfo();
        var pathSpineObj = "/Prefabs/SpineObject";
      };
      UnitSpineRendererController.prototype.Ticks = function(deltaTime) {};
      UnitSpineRendererController = __decorate([ ccclass ], UnitSpineRendererController);
      return UnitSpineRendererController;
    }();
    exports.default = UnitSpineRendererController;
    cc._RF.pop();
  }, {} ],
  UnitSpriteRendererController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41af3xKp1tH4riRnr9bN82b", "UnitSpriteRendererController");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UnitSpriteRendererController = function() {
      function UnitSpriteRendererController(tfParent, renderUnitInfo) {}
      UnitSpriteRendererController.prototype.LoadRendererUnit = function(tfUnitContainer) {
        throw new Error("Method not implemented.");
      };
      UnitSpriteRendererController.prototype.Ticks = function(deltaTime) {
        throw new Error("Method not implemented.");
      };
      UnitSpriteRendererController.prototype.GetRenderUnitInfo = function() {
        throw new Error("Method not implemented.");
      };
      UnitSpriteRendererController.prototype.SetSortingOrder = function(order) {};
      UnitSpriteRendererController.prototype.SetSortingLayer = function(layerName) {};
      UnitSpriteRendererController.prototype.Hide = function() {
        throw new Error("Method not implemented.");
      };
      UnitSpriteRendererController.prototype.Show = function() {};
      UnitSpriteRendererController.prototype.DestroyRendererUnit = function() {};
      UnitSpriteRendererController.prototype.start = function() {};
      UnitSpriteRendererController = __decorate([ ccclass ], UnitSpriteRendererController);
      return UnitSpriteRendererController;
    }();
    exports.default = UnitSpriteRendererController;
    cc._RF.pop();
  }, {} ],
  WellcomeScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "137f89eypBOfIxil1w9jjda", "WellcomeScreen");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUIForm_1 = require("../../UIFramework/BaseUIForm");
    var ConstDefine_1 = require("../ConstDefine");
    var IdelScreenCtrl_1 = require("../Controller/IdelScreenCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WellcomeScreen = function(_super) {
      __extends(WellcomeScreen, _super);
      function WellcomeScreen() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      WellcomeScreen.prototype.start = function() {
        this.pnlHelp.active = false;
        this._Register();
      };
      WellcomeScreen.prototype._Register = function() {
        var _this = this;
        this.btnCloseHelp.on(cc.Node.EventType.TOUCH_START, function() {
          _this.pnlHelp.active = false;
        }, this.node);
        this.btnHelp.on(cc.Node.EventType.TOUCH_START, function() {
          _this.pnlHelp.active = true;
        }, this.node);
        this.btnPlay.on(cc.Node.EventType.TOUCH_START, function() {
          _this.CloseUIForm();
          _this.OpenUIform(ConstDefine_1.default.LOADDING);
          IdelScreenCtrl_1.default.GetInstance().Enter();
        }, this.node);
      };
      __decorate([ property(cc.Node) ], WellcomeScreen.prototype, "pnlHelp", void 0);
      __decorate([ property(cc.Node) ], WellcomeScreen.prototype, "btnCloseHelp", void 0);
      __decorate([ property(cc.Node) ], WellcomeScreen.prototype, "btnHelp", void 0);
      __decorate([ property(cc.Node) ], WellcomeScreen.prototype, "btnPlay", void 0);
      __decorate([ property(cc.Node) ], WellcomeScreen.prototype, "btnContinue", void 0);
      WellcomeScreen = __decorate([ ccclass ], WellcomeScreen);
      return WellcomeScreen;
    }(BaseUIForm_1.default);
    exports.default = WellcomeScreen;
    cc._RF.pop();
  }, {
    "../../UIFramework/BaseUIForm": "BaseUIForm",
    "../ConstDefine": "ConstDefine",
    "../Controller/IdelScreenCtrl": "IdelScreenCtrl"
  } ]
}, {}, [ "UISuperItem", "UISuperLayout", "UISuperScrollView", "BaseUIForm", "ResourceManager", "UIManager", "EquiItemBag", "EquipItemView", "ItemIconSkill", "QuestItem", "RoleIconView", "ShopItem", "TapMessage4", "ItemDrag", "Commons", "ConstDefine", "AbstractEffectRendererController", "AbstractGameState4", "AbstractRenderUnitGroup", "AbstractUnitRendererController", "BaseControler", "BaseRenderUnitInfo", "BaseSkillController", "BaseSkillInfo", "BaseVisualEffectInfo", "CanvasHelper", "DataCtrl", "EffectContainer", "EffectsGroup", "G2BattleConst", "G2BattleContext", "G2Interface", "G2SoundEffectInfo", "G2TimeCounter", "HeroType4", "IdelScreenCtrl", "RangeSkillInfo", "RenderUnitContainer", "SceneBattle4Ctrl", "SkillMeleeController", "SkillProjectile", "SkillProjectileContainer", "SkillRangeController", "StageRoadCtrl", "TapBattle4", "TapDbHero4", "TapGameData4Ctrl", "TapHeroAI4", "TapHeroInfo4", "TapHpBar4", "TapItemLoot", "TapPanelFlyPoint", "TapPanelLoot", "TapPointFlyUp", "TapStageInfo4", "TapTheme4", "UnitSpineRendererController", "UnitSpriteRendererController", "GameDirection", "GameLaucher", "GameStart", "TapStateEndLose4", "TapStateEndWin4", "TapStateNextLevel4", "TapStateNextTheme4", "TapStatePlay4", "TapStateRevive4", "TapStateStart4", "TapStateTutorial4", "Loadding", "AbstractCharacterModelInfo", "AbstractCharacterRendererController", "CharacterAnimationRendererController", "CharacterContainer", "CharacterSpineBoneRendererController", "TapHero4", "ItemCombieModel", "ItemUserModel", "PaymentPackageModel", "QuestModel", "SkillModel", "StageRoadModel", "SampleDragonBone", "TapPanelLoading4", "ActionTimer", "Dictionary", "GameHelp", "HashTable", "IDictionary", "ShareCode", "Stack", "BagView", "MainCharView", "MainIdleScreen", "QuestView", "ShopView", "SkillView", "TapPopupFinger", "TapPopupTutorial", "WellcomeScreen", "ConstantsFk4", "DataServerCtrl", "HeroCtrl", "ItemsCtrl", "QuestCtrl", "SkillCtrl", "TapSavingData4" ]);