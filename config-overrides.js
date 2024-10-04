import { override, addWebpackPlugin } from 'customize-cra';
import TerserPlugin from 'terser-webpack-plugin';

export default override(
   (config) => {
      if (config.mode === 'production') {
         config.optimization.minimizer = [
            new TerserPlugin({
               terserOptions: {
                  format: {
                     comments: false, // Видаляє всі коментарі
                  },
               },
               extractComments: false, // Відключає витяг коментарів у окремі файли
            }),
         ];
      }
      return config;
   }
);