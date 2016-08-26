package fr.archriss.cordova.androidbuild;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Build extends CordovaPlugin {
    public static final String TAG = "Build";

    public Build() {
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("getBuildInfo".equals(action)) {
            JSONObject r = new JSONObject();
            r.put("device", this.getDevice());
            callbackContext.success(r);
        }
        else {
            return false;
        }
        return true;
    }

    public String getDevice() {
        String device = android.os.Build.DEVICE;
        return device;
    }
}
