import React, {Fragment, ReactElement, ReactNode} from "react";
import ReactDOM from 'react-dom';
import {Icon} from "../index";
import {scopedClassMaker} from '../helpers/classes';

interface props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker("sun-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const result = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {props.buttons && props.buttons.length > 0 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>}
      </div>
    </Fragment>
    : null
  return (
    ReactDOM.createPortal(result, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: false
};
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterOnClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()

  }
  const component = (
    <Dialog visible={true}
            buttons={buttons}
            onClose={() => {
              close();
              afterOnClose && afterOnClose();
            }}>
      {content}
    </Dialog>)
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
  return close;
}

const alert = (content: string) => {
  const buttons = [<button onClick={() => close()}>ok</button>];
  const close = modal(content, buttons);

}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    onClose()
    yes && yes()
  }
  const onNo = () => {
    onClose()
    no && no()
  }
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>]
  const onClose = modal(content, buttons, no)
};

export {alert, confirm, modal};
export default Dialog;