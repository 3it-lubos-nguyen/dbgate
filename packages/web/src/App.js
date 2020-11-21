import React from 'react';
import './index.css';
import Screen from './Screen';
import {
  CurrentWidgetProvider,
  CurrentDatabaseProvider,
  OpenedTabsProvider,
  SavedSqlFilesProvider,
  OpenedConnectionsProvider,
  LeftPanelWidthProvider,
  CurrentArchiveProvider,
  CurrentThemeProvider,
} from './utility/globalState';
import { SocketProvider } from './utility/SocketProvider';
import ConnectionsPinger from './utility/ConnectionsPinger';
import { ModalLayerProvider } from './modals/showModal';
import UploadsProvider from './utility/UploadsProvider';
import ThemeHelmet from './themes/ThemeHelmet';
import PluginsProvider from './plugins/PluginsProvider';

function App() {
  return (
    <CurrentWidgetProvider>
      <CurrentDatabaseProvider>
        <SocketProvider>
          <OpenedTabsProvider>
            <SavedSqlFilesProvider>
              <OpenedConnectionsProvider>
                <LeftPanelWidthProvider>
                  <ConnectionsPinger>
                    <ModalLayerProvider>
                      <CurrentArchiveProvider>
                        <CurrentThemeProvider>
                          <UploadsProvider>
                            <PluginsProvider>
                              <ThemeHelmet />
                            </PluginsProvider>
                            <Screen />
                          </UploadsProvider>
                        </CurrentThemeProvider>
                      </CurrentArchiveProvider>
                    </ModalLayerProvider>
                  </ConnectionsPinger>
                </LeftPanelWidthProvider>
              </OpenedConnectionsProvider>
            </SavedSqlFilesProvider>
          </OpenedTabsProvider>
        </SocketProvider>
      </CurrentDatabaseProvider>
    </CurrentWidgetProvider>
  );
}

export default App;
