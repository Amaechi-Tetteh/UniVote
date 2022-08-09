"use strict";
(() => {
var exports = {};
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./socialGroupNft.js + 1 modules
var socialGroupNft_0 = __webpack_require__(509);
// EXTERNAL MODULE: ./web3.js
var web3 = __webpack_require__(442);
;// CONCATENATED MODULE: ./build/contracts/SocialToken.json
const SocialToken_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_socialGroupFactory","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newContract","type":"address"}],"name":"setContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"account","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"batchBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./socialToken.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(JSON.stringify(SocialToken_namespaceObject.Mt)), '0xBFBa5E18ba93174A2387d9A855B61811B37D65AA');
/* harmony default export */ const socialToken_0 = (instance);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: external "@cardinal/token-manager/dist/cjs/programs/tokenManager"
const tokenManager_namespaceObject = require("@cardinal/token-manager/dist/cjs/programs/tokenManager");
;// CONCATENATED MODULE: ./components/VoteForm.js






class voteForm extends external_react_.Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false,
        balance: ''
    };
    onSubmit = async (event)=>{
        event.preventDefault();
        const socialToken = socialToken_0;
        this.setState({
            loading: true,
            errorMessage: ''
        });
        try {
            const accounts1 = await ethereum.request({
                method: 'eth_accounts'
            });
            const balance = await socialToken.methods.balanceOf(accounts1[0]).call();
            this.setState({
                balance
            });
            routes.Router.replaceRoute(`/tickets/${this.props.address}`);
        } catch (err) {
            if (tokenManager_namespaceObject.accounts[0] == null) {
                this.setState({
                    errorMessage: 'Please Login to Metamask and Refresh The Page!'
                });
            } else {
                this.setState({
                    errorMessage: err.message
                });
            }
        }
        this.setState({
            loading: false,
            value: ''
        });
    };
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    error: true,
                    header: "Oops!",
                    content: this.state.errorMessage
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Statistic.Value, {
                                children: this.state.balance
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            loading: this.state.loading,
                            children: "View Your Governance Tokens"
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const VoteForm = (voteForm);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(544);
;// CONCATENATED MODULE: ./components/RequestRow.js





class RequestRow extends external_react_.Component {
    onYesVote = async ()=>{
        const socialGroupNft = (0,socialGroupNft_0/* default */.Z)(this.props.address);
        const accounts = await ethereum.request({
            method: 'eth_accounts'
        });
        await socialGroupNft.methods.voteOnReferendum(this.props.id, true).send({
            from: accounts[0]
        });
        routes.Router.pushRoute(`/tickets/${this.props.address}`);
    };
    onNoVote = async ()=>{
        const socialGroupNft = (0,socialGroupNft_0/* default */.Z)(this.props.address);
        const accounts = await ethereum.request({
            method: 'eth_accounts'
        });
        await socialGroupNft.methods.voteOnReferendum(this.props.id, false).send({
            from: accounts[0]
        });
        routes.Router.pushRoute(`/tickets/${this.props.address}`);
    };
    closeReferendum = async ()=>{
        const socialGroupNft = (0,socialGroupNft_0/* default */.Z)(this.props.address);
        const accounts = await ethereum.request({
            method: 'eth_accounts'
        });
        await socialGroupNft.methods.endReferendum(this.props.id).send({
            from: accounts[0]
        });
        routes.Router.pushRoute(`/tickets/${this.props.address}`);
    };
    render() {
        const { Row , Cell  } = external_semantic_ui_react_.Table;
        const { id , referendum  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
            disabled: referendum.complete,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: id
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.yesVotes
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.noVotes
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "green",
                        basic: true,
                        onClick: this.onYesVote,
                        children: "Yes"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "red",
                        basic: true,
                        onClick: this.onNoVote,
                        children: "No"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                    children: referendum.complete ? null : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        color: "black",
                        basic: true,
                        onClick: this.closeReferendum,
                        children: "End"
                    })
                })
            ]
        }));
    }
}
/* harmony default export */ const components_RequestRow = (RequestRow);

;// CONCATENATED MODULE: ./pages/tickets/show.js










class TicketShow extends external_react_.Component {
    state = {
        account: '',
        socialGroupNft: ''
    };
    static async getInitialProps(props) {
        const socialGroupNft = (0,socialGroupNft_0/* default */.Z)(props.query.address);
        // const accounts = await web3.eth.getAccounts();
        // console.log(accounts[0])
        const name = await socialGroupNft.methods.name().call();
        const owner = await socialGroupNft.methods.symbol().call();
        const members = (await socialGroupNft.methods.getVoters().call()).length;
        // const referendums = await socialGroupNft.methods.referendums().call()
        const activeReferendums = await socialGroupNft.methods.activeReferendums().call();
        // console.log(referendums[0].toString());
        // console.log("Referendum Count: ",activeReferendums)
        const referendums = await Promise.all(Array(parseInt(activeReferendums)).fill().map((element, index)=>{
            return socialGroupNft.methods.referendums(index).call();
        }));
        return {
            address: props.query.address.toString(),
            name: name,
            owner: owner,
            memberCount: members,
            referendumCount: activeReferendums,
            referendums: referendums
        };
    }
    renderCards() {
        const { address , name , owner , memberCount , referendumCount  } = this.props;
        const items = [
            {
                header: `Welcome To ${name} Official Social Group`,
                description: `Mint a ${name} NFT To Start Voting on Referendums`
            },
            {
                header: address,
                meta: 'Social Group Address',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: owner,
                meta: 'The Owner Of This Social Group',
                description: `Contact ${owner} for Support Regarding This Social Group`
            },
            {
                header: memberCount,
                meta: 'Active Member Count',
                description: 'Become a Member By Voting on a Referendum'
            },
            {
                header: referendumCount,
                meta: 'Active Referendums',
                description: 'Total Number Of Active Referendums'
            }, 
        ];
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: items
        }));
    }
    createPage() {
        const address = this.props.address;
        return(/*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
            route: `/tickets/create/${address}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    floated: "right",
                    content: "Register New Social Group",
                    icon: "add circle",
                    primary: true
                })
            })
        }));
    }
    renderReferendums() {
        return this.props.referendums.map((referendum, index)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_RequestRow, {
                id: index,
                referendum: referendum,
                address: this.props.address
            }, index));
        });
    }
    onSubmit = async (event)=>{
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: ''
        });
        const address = this.props.address;
        const socialGroupNft = (0,socialGroupNft_0/* default */.Z)(address);
        const accounts = await ethereum.request({
            method: 'eth_accounts'
        });
        try {
            await socialGroupNft.methods.mint().send({
                from: accounts[0]
            });
            routes.Router.pushRoute(`/tickets/${this.props.address}`);
        } catch (err) {
            if (accounts[0] == null) {
                this.setState({
                    errorMessage: 'Please Login to Metamask and Refresh The Page!'
                });
            } else {
                this.setState({
                    errorMessage: err.message
                });
            }
        }
        this.setState({
            loading: false,
            value: ''
        });
    };
    // create=async event =>{
    //   event.preventDefault();
    //   this.setState({loading:true, errorMessage:''});
    //   const address = this.props.address;
    //   const socialGroupNft = SocialGroupNft(address)
    //   const accounts = await ethereum.request({ method: 'eth_accounts' });
    //   try {
    //     await socialGroupNft.methods.createReferendum().send({
    //       from: accounts[0]
    //     })
    //   }catch (err) {
    //     if(accounts[0] == null){
    //       this.setState({errorMessage: 'Please Login to Metamask and Refresh The Page!'})
    //     }else{
    //       this.setState({errorMessage:err.message});
    //     }
    //   }
    //   this.setState({loading:false, value:''});
    // };
    render() {
        const { Header , Row , HeaderCell , Body  } = external_semantic_ui_react_.Table;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Tickets Show"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 10,
                                    children: this.renderCards()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(VoteForm, {
                                        address: this.props.address
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                secondary: true,
                                loading: this.state.loading,
                                onClick: this.onSubmit,
                                children: "MINT"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 6,
                            children: this.createPage(this.props.address)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Title"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "Yes Votes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "No Votes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "VOTE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                        children: "END"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Body, {
                            children: this.renderReferendums()
                        })
                    ]
                })
            ]
        }));
    }
}
// @refresh reset
/* harmony default export */ const show = (TicketShow);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,509], () => (__webpack_exec__(764)));
module.exports = __webpack_exports__;

})();