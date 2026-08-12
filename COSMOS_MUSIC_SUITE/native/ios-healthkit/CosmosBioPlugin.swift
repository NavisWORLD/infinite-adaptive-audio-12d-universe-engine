import Capacitor
import HealthKit

@objc(CosmosBioPlugin)
public class CosmosBioPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CosmosBioPlugin"
    public let jsName = "CosmosBio"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestAuthorization", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "latestHeartRate", returnType: CAPPluginReturnPromise)
    ]
    private let healthStore = HKHealthStore()

    @objc func requestAuthorization(_ call: CAPPluginCall) {
        guard HKHealthStore.isHealthDataAvailable(), let hr = HKObjectType.quantityType(forIdentifier: .heartRate) else {
            call.reject("HealthKit or heart rate unavailable"); return
        }
        healthStore.requestAuthorization(toShare: [], read: [hr]) { ok, error in
            if let error = error { call.reject(error.localizedDescription); return }
            call.resolve(["authorized": ok])
        }
    }

    @objc func latestHeartRate(_ call: CAPPluginCall) {
        guard let hr = HKObjectType.quantityType(forIdentifier: .heartRate) else { call.reject("Heart-rate type unavailable"); return }
        let sort = NSSortDescriptor(key: HKSampleSortIdentifierEndDate, ascending: false)
        let query = HKSampleQuery(sampleType: hr, predicate: nil, limit: 1, sortDescriptors: [sort]) { _, samples, error in
            if let error = error { call.reject(error.localizedDescription); return }
            guard let sample = samples?.first as? HKQuantitySample else { call.resolve(["bpm": NSNull()]); return }
            let unit = HKUnit.count().unitDivided(by: .minute())
            call.resolve(["bpm": sample.quantity.doubleValue(for: unit), "timestamp": sample.endDate.timeIntervalSince1970])
        }
        healthStore.execute(query)
    }
}
