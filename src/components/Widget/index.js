import React from "react";
import PropTypes from "prop-types";
import {Card, CardTitle} from "reactstrap";
import {useFlags} from 'launchdarkly-react-client-sdk';

const Widget = ({children, styleName, title}) => {
  //const flags = useFlags();
  // const useFlags(devTestFlag)
  const { devTestFlag } = useFlags()
  console.log(`devTestFlag: ${devTestFlag}, title: ${title}`)
return (
  <Card className={`jr-card jr-card-widget ${styleName}`}>
    { devTestFlag && title ? <CardTitle>{title}</CardTitle> : null}
    {children}
  </Card>
  )
};


Widget.defaultProps = {
  styleName: '',
};

Widget.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default Widget;