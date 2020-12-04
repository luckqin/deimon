import * as React from 'react';
import { ReactNode, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';

export interface IDMDialogProps {
  visible?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  showMask?: boolean;
  showCloseBtn?: boolean;
  maskClosable?: boolean;
}

export const Dialog = React.memo<IDMDialogProps>(props => {
  const {
    visible,
    children,
    title,
    footer,
    onClose,
    showMask = true,
    maskClosable = true,
    showCloseBtn = true,
  } = props;

  const closeDialog = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  const onClickMask = useCallback(() => {
    maskClosable && closeDialog();
  }, [maskClosable, closeDialog]);

  return (
    <Portal visible={visible}>
      <div className="dm-dialog-root">
        {showMask && <div className="dm-dialog-mask" />}
        <div className="dm-dialog-wrapper" onClick={onClickMask}>
          <CSSTransition
            appear
            in={visible}
            timeout={300}
            classNames="dm-zoom"
            mountOnEnter
            unmountOnExit
          >
            <div className="dm-dialog" onClick={e => e.stopPropagation()}>
              {title && <div className="dm-dialog-header">{title}</div>}
              {showCloseBtn && (
                <div className="dm-dialog-closebtn" onClick={closeDialog}>
                  Close Dialogxx
                </div>
              )}
              <div className="dm-dialog-body">{children}</div>
              {footer && <div className="dm-dialog-footer">{footer}</div>}
            </div>
          </CSSTransition>
        </div>
      </div>
    </Portal>
  );
});

Dialog.displayName = 'DM-Dialog';

export default Dialog;
