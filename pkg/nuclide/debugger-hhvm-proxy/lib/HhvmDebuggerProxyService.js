'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */


class HhvmDebuggerProxyService {
  onNotify(callback: (message: string) => void): Disposable {
    throw new Error('abstract');
  }

  // port: must match port in hhvm's xdebug.ini config file
  attach(port: number, pid: ?number, idekey: ?string, path: ?string): Promise<string> {
    throw new Error('abstract');
  }

  sendCommand(message: string): Promise<string> {
    throw new Error('abstract');
  }

  dispose(): void {
    throw new Error('abstract');
  }
}

module.exports = HhvmDebuggerProxyService;
