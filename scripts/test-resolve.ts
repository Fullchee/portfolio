// Node takes only the first target of a package.json `imports` array, so extensionless `#lib/x` fails outside Next; retry with each extension the map lists.
import { registerHooks } from "node:module";

const extensions = [".ts", ".tsx", "/index.tsx"];

registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (!specifier.startsWith("#")) throw error;

      for (const extension of extensions) {
        try {
          return nextResolve(`${specifier}${extension}`, context);
        } catch {
          // try the next extension
        }
      }

      throw error;
    }
  },
});
