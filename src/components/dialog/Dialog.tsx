import * as React from 'react';
import { Component, createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';

let mousePosition: any = null;

document.querySelector('body').addEventListener('click', (e: MouseEvent) => {
  mousePosition = {
    x: e.clientX,
    y: e.clientY,
  };
});

class DialogElWrapper extends Component<any, any> {
  rootRef = createRef<HTMLDivElement>();

  onMaskClick() {
    console.log('onclick mask');
  }

  render() {
    const { visible, mask, children } = this.props;

    return (
      <div ref={this.rootRef} tabIndex={-1} className="zent-dialog-r-root">
        {visible && mask && <div className="zent-dialog-r-backdrop" />}
        <div className="zent-dialog-r-wrap" onClick={this.onMaskClick}>
          {children}
        </div>
      </div>
    );
  }
}

function DialogInnerEl({ children, onClose }: any) {
  const dialogEl = React.useRef<HTMLDivElement>();

  const Closer = (
    <button
      type="button"
      onClick={() => {
        onClose();
      }}
    >
      <div>close</div>
    </button>
  );

  const resetTransformOrigin = () => {
    if (
      mousePosition &&
      mousePosition.x >= 0 &&
      mousePosition.y >= 0 &&
      dialogEl &&
      dialogEl.current.getBoundingClientRect
    ) {
      const { left: x, top: y } = dialogEl.current.getBoundingClientRect();
      const origin = `${mousePosition.x - x}px ${mousePosition.y - y}px 0`;
      const style = dialogEl.current.style;
      ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
        style[`${prefix}TransformOrigin` as any] = origin;
      });
      console.log('style: ', style);
      style.transformOrigin = origin;
    }
  };

  React.useLayoutEffect(() => {
    resetTransformOrigin();
  });

  return (
    <div className={`zent-dialog-r`} ref={dialogEl}>
      {Closer}
      <div className="zent-dialog-r-body">{children}</div>
    </div>
  );
}

export class Dialog extends Component<any, any> {
  static defaultProps = {
    onClose() {},
    visible: false,
    className: '',
    style: {},
    title: '',
    closeBtn: true,
    mask: true,
    maskClosable: true,
    footer: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      prevOpen: props.visible,
      exiting: false,
    };
  }

  render() {
    const { visible, mask, maskClosable, children, onClose } = this.props;

    return (
      // @ts-ignore
      <Portal visible={visible}>
        <DialogElWrapper mask={mask} maskClosable={maskClosable} visible={visible}>
          <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            in={visible}
            timeout={300}
            classNames="zent-zoom"
          >
            <DialogInnerEl
              onClose={() => {
                onClose();
              }}
            >
              {children}
              222
            </DialogInnerEl>
          </CSSTransition>
        </DialogElWrapper>
      </Portal>
    );
  }
}

export default Dialog;
