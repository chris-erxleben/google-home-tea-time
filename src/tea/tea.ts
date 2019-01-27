'use strict';

import bodyParser from 'body-parser';
import express from 'express';

import { BrewingStyles, messages, TeaSubtypes, TeaTypes } from '../shared';

const tea = express();

tea.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());

tea.post('/tea', (req: any, res: any) => {
  if (req.body.result && req.body.result.parameters && req.body.result.parameters.teaType) {
    if (
      req.body.result.parameters.brewingStyle &&
      !Object.values(BrewingStyles).includes(req.body.result.parameters.brewingStyle)
    ) {
        return res.json({
            fulfillmentText: messages.unknownBrewingStyle,
        });
    }
    const fulfillments: string[] = [];
    switch (req.body.result.parameters.teaType) {
      case TeaTypes.White:
        if (req.body.result.parameters.brewingStyle) {
          if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
            fulfillments.push(messages.white.gongFuCha);
          } else {
            fulfillments.push(messages.white.western);
          }
        } else {
          fulfillments.push(messages.white.western, messages.white.gongFuCha);
        }
        break;
      case TeaTypes.Green:
        if (req.body.result.parameters.brewingStyle) {
            if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                fulfillments.push(messages.green.gongFuCha);
            } else {
                fulfillments.push(messages.green.western);
            }
        } else {
            fulfillments.push(messages.green.western, messages.green.gongFuCha);
        }
        break;
      case TeaTypes.Yellow:
        if (req.body.result.parameters.brewingStyle) {
            if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                fulfillments.push(messages.yellow.gongFuCha);
            } else {
                fulfillments.push(messages.yellow.western);
            }
        } else {
            fulfillments.push(messages.yellow.western, messages.yellow.gongFuCha);
        }
        break;
      case TeaTypes.Oolong:
        if (req.body.result.parameters.teaSubtype) {
            if (req.body.result.parameters.teaSubtype === TeaSubtypes.Strip) {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.oolong.strip.gongFuCha);
                    } else {
                        fulfillments.push(messages.oolong.strip.western);
                    }
                } else {
                    fulfillments.push(messages.oolong.strip.western, messages.oolong.strip.gongFuCha);
                }
            } else {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.oolong.ball.gongFuCha);
                    } else {
                        fulfillments.push(messages.oolong.ball.western);
                    }
                } else {
                    fulfillments.push(messages.oolong.ball.western, messages.oolong.ball.gongFuCha);
                }
            }
        } else {
            fulfillments.push(messages.oolong.missingSubtype);
        }
        break;
      case TeaTypes.Black:
        if (req.body.result.parameters.teaSubtype) {
            if (req.body.result.parameters.teaSubtype === TeaSubtypes.LargeLeaf) {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.black.largeLeaf.gongFuCha);
                    } else {
                        fulfillments.push(messages.black.largeLeaf.western);
                    }
                } else {
                    fulfillments.push(messages.black.largeLeaf.western, messages.black.largeLeaf.gongFuCha);
                }
            } else {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.black.smallLeaf.gongFuCha);
                    } else {
                        fulfillments.push(messages.black.smallLeaf.western);
                    }
                } else {
                    fulfillments.push(messages.black.smallLeaf.western, messages.black.smallLeaf.gongFuCha);
                }
            }
        } else {
            fulfillments.push(messages.black.missingSubtype);
        }
        break;
      case TeaTypes.PuErh:
        if (req.body.result.parameters.teaSubtype) {
            if (req.body.result.parameters.teaSubtype === TeaSubtypes.Raw) {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.puerh.raw.gongFuCha);
                    } else {
                        fulfillments.push(messages.puerh.raw.western);
                    }
                } else {
                    fulfillments.push(messages.puerh.raw.western, messages.puerh.raw.gongFuCha);
                }
            } else {
                if (req.body.result.parameters.brewingStyle) {
                    if (req.body.result.parameters.brewingStyle === BrewingStyles.GongFuCha) {
                        fulfillments.push(messages.puerh.ripe.gongFuCha);
                    } else {
                        fulfillments.push(messages.puerh.ripe.western);
                    }
                } else {
                    fulfillments.push(messages.puerh.ripe.western, messages.puerh.ripe.gongFuCha);
                }
            }
        } else {
            fulfillments.push(messages.puerh.missingSubtype);
        }
        break;
      default:
        fulfillments.push(messages.unknownTeaType);
    }
    return res.json({
      fulfillmentText: fulfillments.join(' '),
    });
  } else {
    return res.json({
      fulfillmentText: messages.missingTeaType,
    });
  }
});

export default tea;
