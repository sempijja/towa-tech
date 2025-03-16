
import React, { useState } from "react";
import { 
  Scale, 
  Recycle, 
  Truck, 
  TrendingUp, 
  Leaf, 
  BarChart4, 
  HandCoins 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const CarbonCalculator = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("impact");
  const [wasteAmount, setWasteAmount] = useState<number>(0);
  const [wasteType, setWasteType] = useState<string>("mixed");
  const [calculationDone, setCalculationDone] = useState<boolean>(false);
  const [carbonSaved, setCarbonSaved] = useState<number>(0);
  const [financialBenefit, setFinancialBenefit] = useState<number>(0);

  // Carbon emission factors per kg of waste
  const carbonFactors = {
    plastic: 6,
    paper: 2.5,
    metal: 4,
    glass: 0.5,
    organic: 1.2,
    mixed: 3
  };

  // Financial value per kg of waste
  const financialFactors = {
    plastic: 0.5,
    paper: 0.2,
    metal: 0.8,
    glass: 0.3,
    organic: 0.1,
    mixed: 0.3
  };

  const calculateImpact = () => {
    if (!wasteAmount || wasteAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid waste amount",
        variant: "destructive"
      });
      return;
    }

    // Calculate carbon impact
    const carbonFactor = carbonFactors[wasteType as keyof typeof carbonFactors] || carbonFactors.mixed;
    const calculatedCarbonSaved = wasteAmount * carbonFactor;
    setCarbonSaved(calculatedCarbonSaved);

    // Calculate financial benefit
    const financialFactor = financialFactors[wasteType as keyof typeof financialFactors] || financialFactors.mixed;
    const calculatedFinancialBenefit = wasteAmount * financialFactor;
    setFinancialBenefit(calculatedFinancialBenefit);

    setCalculationDone(true);

    toast({
      title: "Calculation complete",
      description: `You've saved approximately ${calculatedCarbonSaved.toFixed(2)} kg of CO2e!`,
    });
  };

  const resetCalculator = () => {
    setWasteAmount(0);
    setWasteType("mixed");
    setCalculationDone(false);
    setCarbonSaved(0);
    setFinancialBenefit(0);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          Waste Impact Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate the environmental impact and financial benefits of your waste collection and recycling efforts
        </p>
      </div>

      {/* Calculator Tabs */}
      <Tabs defaultValue="impact" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="impact" className="text-base py-3">
            <Leaf className="mr-2 h-5 w-5" /> Environmental Impact
          </TabsTrigger>
          <TabsTrigger value="financial" className="text-base py-3">
            <HandCoins className="mr-2 h-5 w-5" /> Financial Benefits
          </TabsTrigger>
        </TabsList>

        {/* Environmental Impact Calculator */}
        <TabsContent value="impact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="mr-2 h-6 w-6 text-green-600" />
                Measure Your Impact
              </CardTitle>
              <CardDescription>
                Enter your waste collection details to calculate environmental benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="wasteAmount">Amount of Waste Collected (kg)</Label>
                  <Input
                    id="wasteAmount"
                    type="number"
                    min="0"
                    placeholder="Enter amount in kg"
                    value={wasteAmount || ""}
                    onChange={(e) => setWasteAmount(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteType">Type of Waste</Label>
                  <select
                    id="wasteType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                  >
                    <option value="mixed">Mixed Waste</option>
                    <option value="plastic">Plastic</option>
                    <option value="paper">Paper</option>
                    <option value="metal">Metal</option>
                    <option value="glass">Glass</option>
                    <option value="organic">Organic</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={resetCalculator}
                  className="w-1/3"
                >
                  Reset
                </Button>
                <Button
                  onClick={calculateImpact}
                  className="bg-green-600 hover:bg-green-700 w-2/3 ml-4"
                >
                  Calculate Impact
                </Button>
              </div>

              {calculationDone && (
                <div className="mt-8 space-y-6">
                  <Alert className="bg-green-50 border-green-200">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-green-800">Environmental Impact</AlertTitle>
                    <AlertDescription className="text-green-700">
                      You've saved approximately <span className="font-bold">{carbonSaved.toFixed(2)} kg of CO2e</span> by diverting this waste from landfills.
                    </AlertDescription>
                  </Alert>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <Recycle size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">Waste Diverted</h3>
                        <p className="text-center text-2xl font-bold text-green-600">{wasteAmount} kg</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <Leaf size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">CO2 Prevented</h3>
                        <p className="text-center text-2xl font-bold text-green-600">{carbonSaved.toFixed(2)} kg</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <TrendingUp size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">Green Points</h3>
                        <p className="text-center text-2xl font-bold text-green-600">{Math.round(carbonSaved * 10)}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <BarChart4 className="mr-2 h-4 w-4" />
                        View Detailed Impact Report
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Environmental Impact Report</DialogTitle>
                        <DialogDescription>
                          Detailed breakdown of your waste collection impact
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Metric</TableHead>
                              <TableHead className="text-right">Value</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Waste Type</TableCell>
                              <TableCell className="text-right capitalize">{wasteType}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Amount Collected</TableCell>
                              <TableCell className="text-right">{wasteAmount} kg</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>CO2e Reduced</TableCell>
                              <TableCell className="text-right">{carbonSaved.toFixed(2)} kg</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Equivalent to Trees</TableCell>
                              <TableCell className="text-right">{(carbonSaved / 21).toFixed(1)} trees/year</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Green Bank Points</TableCell>
                              <TableCell className="text-right">{Math.round(carbonSaved * 10)} points</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Financial Value</TableCell>
                              <TableCell className="text-right">UGX {(financialBenefit * 3500).toLocaleString()}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <DialogFooter>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Save to Profile
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Benefits Calculator */}
        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HandCoins className="mr-2 h-6 w-6 text-green-600" />
                Financial Benefits Calculator
              </CardTitle>
              <CardDescription>
                Calculate potential earnings and loan eligibility based on your waste collection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="wasteAmount">Amount of Waste Collected (kg)</Label>
                  <Input
                    id="wasteAmount"
                    type="number"
                    min="0"
                    placeholder="Enter amount in kg"
                    value={wasteAmount || ""}
                    onChange={(e) => setWasteAmount(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteType">Type of Waste</Label>
                  <select
                    id="wasteType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value)}
                  >
                    <option value="mixed">Mixed Waste</option>
                    <option value="plastic">Plastic</option>
                    <option value="paper">Paper</option>
                    <option value="metal">Metal</option>
                    <option value="glass">Glass</option>
                    <option value="organic">Organic</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={resetCalculator}
                  className="w-1/3"
                >
                  Reset
                </Button>
                <Button
                  onClick={calculateImpact}
                  className="bg-green-600 hover:bg-green-700 w-2/3 ml-4"
                >
                  Calculate Benefits
                </Button>
              </div>

              {calculationDone && (
                <div className="mt-8 space-y-6">
                  <Alert className="bg-green-50 border-green-200">
                    <HandCoins className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-green-800">Financial Opportunity</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your collected waste has an estimated value of <span className="font-bold">UGX {(financialBenefit * 3500).toLocaleString()}</span>.
                    </AlertDescription>
                  </Alert>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <HandCoins size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">Market Value</h3>
                        <p className="text-center text-2xl font-bold text-green-600">UGX {(financialBenefit * 3500).toLocaleString()}</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <TrendingUp size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">Credit Score Impact</h3>
                        <p className="text-center text-2xl font-bold text-green-600">+{Math.min(5, Math.ceil(financialBenefit / 5))} points</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-2">
                          <Truck size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-center font-semibold text-lg mb-1">Loan Eligibility</h3>
                        <p className="text-center text-2xl font-bold text-green-600">UGX {(financialBenefit * 3500 * 4).toLocaleString()}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Apply for Micro-Loan
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Benefits Section */}
      <div className="mt-24 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Benefits of Tracking Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Build Credit History</h3>
              <p className="text-gray-600 text-center">
                Your waste collection activity helps build your Green Bank credit score, improving your loan eligibility.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Environmental Impact</h3>
              <p className="text-gray-600 text-center">
                See the real environmental benefits of your work in reducing carbon emissions and landfill waste.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandCoins size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Financial Opportunities</h3>
              <p className="text-gray-600 text-center">
                Unlock higher loan amounts and better terms as you consistently track and report your collection data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 rounded-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Building Your Green Credit</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Join the Green Bank platform and turn your waste collection efforts into financial opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
            Register as a Wastepreneur
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-green-700 px-8 py-3">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
