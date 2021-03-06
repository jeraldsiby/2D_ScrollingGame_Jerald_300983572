var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // constructors
        function Menu() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Menu.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._level1 = new objects.Button("level1", 170, 260, true);
            this._level2 = new objects.Button("level2", 300, 260, true);
            this._level3 = new objects.Button("level3", 430, 260, true);
            this._backButton = new objects.Button("BackButton", 300, 350, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
            this._ocean.Update();
        };
        Menu.prototype.Reset = function () { };
        Menu.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Menu.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._ocean);
            this.addChild(this._level1);
            this.addChild(this._level2);
            this.addChild(this._level3);
            this.addChild(this._backButton);
            this._level1.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                managers.Game.Level = 1;
            }, this);
            this._level2.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                managers.Game.Level = 2;
            }, this);
            this._level3.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                managers.Game.Level = 3;
            }, this);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map